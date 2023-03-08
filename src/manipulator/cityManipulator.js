import _ from "lodash";

export function getCityManipulator(list) {
	try {
		if (_.isEmpty(list)) return [];
		const cityList = [];

		for (let city of list) {
			const payload = {
				id: `${city?.id}`,
				key: `${city?.id}`,
				title: city?.attributes?.name,
				slug: city?.attributes?.slug,
				state: city?.attributes?.state,
			};

			cityList.push(payload);
		}

		return cityList;
	} catch (error) {
		console.log(error);
		return [];
	}
}
