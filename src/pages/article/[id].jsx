import { getArticleDetail } from "@/apis/articles";
import React from "react";

export async function getServerSideProps({ params }) {
	const id = params?.id;

	try {
		const response = await getArticleDetail({ payloadData: { id } });
		console.log(response);

		return {
			props: {
				article: response,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				article: {},
			},
		};
	}
}

const Article = ({ article }) => {
	return (
		<div>
			<h1>{article?.title}</h1>
			<p> {article?.body} </p>
		</div>
	);
};

export default Article;
