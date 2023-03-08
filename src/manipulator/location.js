import _ from "lodash";

export const getLocationManipulator = (data) => {
	try {
		const payload = {
			aboutus: data?.about_us ?? "",
			address1: data?.address_1 ?? "",
			address2: data?.address_2 ?? "",
			bookingLink: data?.booking_link ?? "",
			email: data?.email ?? "",
			id: data?.id ?? "",
			position: data?.location ? JSON.parse(data.location) : { lat: 0, lng: 0 },
			title: data?.name ?? "",
			phoneNumber: data?.phone_number ?? "",
			state: data?.state ?? "",
			webLink: data?.web_link ?? "",
			zipcode: data?.zipcode ?? "",
			rating: data?.rating ?? "",
			slug: data?.slug ?? "",
			tags: data?.tags ?? [],
			miles: data?.miles ?? 0,
			openCloseTime: data?.open_close_time ?? [],
			thumb: data?.logo ?? "",
		};

		return payload;
	} catch (error) {
		console.log(error);
		return {};
	}
};

export const getAllLocationManipulator = (list) => {
	try {
		if (_.isEmpty(list)) return [];

		const locations = [];

		for (let location of list) {
			const payload = getLocationManipulator(location);

			locations.push(payload);
		}

		return locations;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const getSingleLocationManipulator = (location) => {
	try {
		if (_.isEmpty(location)) return {};

		const payload = {};

		payload.id = location?.id ?? "";
		payload.title = location?.name ?? "";
		payload.address1 = location?.address_1 ?? "";
		payload.address2 = location?.address_2 ?? "";
		payload.zipcode = location?.zipcode ?? "";
		payload.email = location?.email ?? "";
		payload.phoneNumber = location?.phone_number ?? "";
		payload.state = location?.state ?? "";
		payload.rating = location?.rating ?? "";
		payload.trusted = location?.trusted ?? false;
		payload.bookingLink = location?.booking_link ?? "";
		payload.aboutUs = location?.about_us ?? "";
		payload.webLink = location?.web_link ?? "";
		payload.position = location?.location
			? JSON.parse(location?.location)
			: { lat: 0, lng: 0 };

		payload.slug = location?.slug ?? "";
		payload.thumb = location?.logo ?? "";
		payload.tags = location?.tags ?? [];
		payload.services =
			location?.services?.map((item) => {
				return {
					...item,
					image: item?.image?.url,
					iconImage: item?.icon_image?.url,
				};
			}) ?? [];

		payload.reviews = [...location?.reviews].filter((a) => a?.verified);
		payload.openCloseTime = location?.open_close_time ?? [];

		return payload;
	} catch (error) {
		console.log(error);
		return {};
	}
};
