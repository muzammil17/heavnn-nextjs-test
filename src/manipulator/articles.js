import _ from "lodash";

export function getAllArticlesManipulator(list) {
	try {
		if (_.isEmpty(list)) {
			return [];
		}

		const allAricles = [];

		for (let article of list) {
			const payload = {
				id: article?.id ?? "",
				userId: article?.userId ?? "",
				title: article?.title ?? "",
				body: article?.body ?? "",
			};

			allAricles.push(payload);
		}

		return allAricles;
	} catch (error) {
		console.error(error);
		return [];
	}
}
