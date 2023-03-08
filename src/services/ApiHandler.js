import axios from "axios";
import {
	ERROR_API_NOT_FOUND,
	ERROR_SOMETHING_WENT_WRONG,
	ERROR_NETWORK_NOT_AVAILABLE,
} from "../config/webservice";
import { API_TIMEOUT } from "../constants";

const userBlocked = () => {};
const onForbidden = async () => {
	return false;
};

const manipulateResponse = (response) => {
	return new Promise((resolve, reject) => {
		if (response.data && !response.data.error) {
			resolve(response.data);
		} else {
			reject(response.data || ERROR_SOMETHING_WENT_WRONG);
		}
	});
};

const ApiHandler = async (request, url, data, headers, baseUrl) => {
	try {
		const response = await axios({
			baseURL: baseUrl || process.env.REACT_APP_BACKEND_ENV,
			timeout: API_TIMEOUT,
			method: request,
			url: url,
			data: data,
			headers: headers,
		});

		return manipulateResponse(response);
	} catch ({ response }) {
		if (response.status === 404) {
			// toastAlert(ERROR_API_NOT_FOUND, ALERT_TYPES.ERROR);
			return { status: false, message: ERROR_API_NOT_FOUND };
		}
		if (response.status === 403) {
			userBlocked(response);
			return { status: false };
		}
		if (response.status === 401) {
			try {
				const newToken = await onForbidden();
				if (newToken) {
					headers.Authorization = `Bearer ${newToken}`;
					const responseNew = await ApiHandler(
						request,
						url,
						data,
						headers,
						baseUrl
					);
					if (responseNew.status === 403 || responseNew.status === 401) {
						userBlocked(responseNew);
						return { status: false };
					}
					return responseNew;
				} else {
					return { status: false };
				}
			} catch (err) {
				console.log(err);
			}
		}
		if (response.status === 500) {
			// toastAlert(ERROR_SOMETHING_WENT_WRONG, ALERT_TYPES.ERROR);
			return { status: false, message: ERROR_SOMETHING_WENT_WRONG };
		}
		if (response.problem === "NETWORK_ERROR") {
			// toastAlert(ERROR_NETWORK_NOT_AVAILABLE, ALERT_TYPES.ERROR);
			return { status: false, message: ERROR_NETWORK_NOT_AVAILABLE };
		} else {
			if (typeof response.data.message == "object") {
				return { status: false, errors: response.data.message };
			}
			return { status: false, message: response.data.message };
		}
	}
};
export default ApiHandler;
