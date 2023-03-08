import _ from "lodash";

export const getImagesManipulator = (list) => {
	try {
		if (_.isEmpty(list)) return [];

		const allImages = [];

		for (let image of list) {
			allImages.push(image?.id);
		}

		return allImages;
	} catch (error) {
		console.log(error);
		return [];
	}
};
