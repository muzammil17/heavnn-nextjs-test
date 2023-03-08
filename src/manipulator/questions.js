import _ from "lodash";

export const getQuestionsListManipulator = (list) => {
	try {
		if (_.isEmpty(list)) return [];

		const questions = [];

		for (let question of list) {
			const payload = {
				id: question?.id,
				title: question?.attributes?.question ?? "",
				description: question?.attributes?.answer ?? "",
			};

			questions.push(payload);
		}

		return questions;
	} catch (error) {
		console.log(error);
		return [];
	}
};
