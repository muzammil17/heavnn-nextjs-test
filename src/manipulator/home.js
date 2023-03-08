import _ from "lodash";

export const getHomeManipulator = (data) => {
	try {
		if (_.isEmpty(data)) return {};

		const payload = {
			businessesSectionContent: data?.businesses_section_content ?? "",
			businessesSectionTitle: data?.businesses_section_title ?? "",
			heroContent: data?.hero_content ?? "",
			heroTitleOne: data?.hero_title_one ?? "",
			heroTitleTwo: data?.hero_title_two ?? "",
			heroImage: data?.hero_image?.data?.attributes?.url ?? "",
			metaDescription: data?.meta_description ?? "",
			metaTitle: data?.meta_title ?? "",
			servicesContent: data?.services_content ?? "",
			servicesTitle: data?.services_title ?? "",
			metaTitle: data?.meta_title ?? "",
			getStarted:
				data?.get_started?.map((item) => ({
					content: item?.content,
					icon: item?.icon?.data?.attributes?.url,
				})) ?? [],
			businessesSectionImage:
				data?.businesses_section_image?.data?.attributes?.url ?? "",
		};

		return payload;
	} catch (error) {
		console.log(error);
		return {};
	}
};
