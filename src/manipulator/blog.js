import _ from "lodash";
import moment from "moment";

// {
//   thumb: Images.Blog2,
//   date: "september 10 / 2022",
//   title: "Why adoption over buying",
//   description:
//     "Every patient matters, and so does the quality of the veterinary care they receive. We're a family-owned veterinary clinic, and your pets are part of our family too, so we provide our services with plenty of love and attention to detail...",
//   slug: "adopting-over-buying",
// },

export function getBlogsManipulator(list) {
	try {
		if (_.isEmpty(list)) return [];
		const blogsList = [];

		for (let blog of list) {
			const payload = {
				id: `${blog.id}` ?? "",
				key: `${blog.id}` ?? "",
				description: blog?.attributes?.content ?? "",
				metaDescription: blog?.attributes?.meta_description ?? "",
				title: blog?.attributes?.title ?? "",
				titleTag: blog?.attributes?.title_tag ?? "",
				slug: blog?.attributes?.slug,
				thumb: blog?.attributes?.image?.data?.attributes?.url ?? "",
				date:
					`${moment(blog?.attributes?.publishedAt).format("MMMM DD / YYYY")}` ??
					"",
			};

			blogsList.push(payload);
		}

		return blogsList;
	} catch (error) {
		console.log(error);
		return [];
	}
}
