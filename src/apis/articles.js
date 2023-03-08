import { BASE_URL, callRequest, GET_POSTS } from "../config/webservice";
import { getCityManipulator } from "@/manipulator/cityManipulator";
import { getAllArticlesManipulator } from "@/manipulator/articles";

export const getAllArticles = async (payload) => {
	const { responseCallback } = payload;
	try {
		// debugger;
		const response = await callRequest(GET_POSTS, {}, "", ``, {}, BASE_URL);

		if (response) {
			responseCallback(true, getAllArticlesManipulator(response));
		} else {
			responseCallback(false);
		}
	} catch (error) {
		console.log("error", error);
		responseCallback(false);
	}
};

export const getArticleDetail = (payload) => {
	const { payloadData } = payload;

	return callRequest(GET_POSTS, {}, payloadData?.id, ``, {}, BASE_URL);
};
