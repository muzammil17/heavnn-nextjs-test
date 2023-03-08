import _ from "lodash";

export function getServicesManipulator(list) {
	try {
		if (_.isEmpty(list)) return [];
		const serviceList = [];

		for (let service of list) {
			const payload = {
				id: `${service?.id}` ?? "",
				key: `${service?.id}` ?? "",
				title: service?.attributes?.name ?? "",
				description: service?.attributes?.description ?? "",
				slug: service?.attributes?.slug ?? "",
				image: service?.attributes?.image?.data?.attributes?.url ?? "",
				iconImage: service?.attributes?.icon_image?.data?.attributes?.url ?? "",
			};

			serviceList.push(payload);
		}

		return serviceList;
	} catch (error) {
		console.log(error);
		return [];
	}
}
