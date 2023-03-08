import ApiHandler from "../services/ApiHandler";

export const API_TIMEOUT = 30000;
export const ABORT_REQUEST_MESSAGE = "Network failed. Aborted request.";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const ERROR_SOMETHING_WENT_WRONG =
	"Something went wrong, Please try again later";
export const ERROR_API_NOT_FOUND = "Api not found, Please try again later";

export const ERROR_NETWORK_NOT_AVAILABLE =
	"Please connect to the working Internet";

export const ERROR_ACCOUNT_BLOCKED =
	"Either your account is blocked or deleted";

export const ERROR_TOKEN_EXPIRE = "Session Expired, Please login again!";

export const REQUEST_TYPE = {
	GET: "get",
	POST: "post",
	DELETE: "delete",
	PUT: "put",
};

export const GET_POSTS = {
	route: "/posts",
	access_token_required: false,
	type: REQUEST_TYPE.GET,
};

export const callRequest = async (
	url,
	data,
	parameter,
	query,
	header = {},
	baseURL = BASE_URL
) => {
	let _header = header;

	let _url =
		parameter && parameter !== null ? `${url?.route}/${parameter}` : url?.route;
	if (query && query !== null) {
		_url = `${_url}?${query}`;
	}
	let response = await ApiHandler(url?.type, _url, data, _header, baseURL);
	console.log("response", response);
	return response;
};
