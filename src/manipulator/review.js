import _ from "lodash";

export const getReviewsManipulator = (list) => {
	try {
		if (_.isEmpty(list)) return [];

		const reviews = [];

		for (let review of list) {
			const payload = {
				id: review?.id ?? "",
				comment: review?.attributes?.comment ?? "",
				name: review?.attributes?.name ?? "",
				rating: review?.attributes?.rating ?? 0,
				image:
					review?.attributes?.review_image?.data?.attributes?.image?.data
						?.attributes.url ?? "",
			};

			reviews.push(payload);
		}

		return reviews;
	} catch (error) {
		console.log(error);
		return [];
	}
};
