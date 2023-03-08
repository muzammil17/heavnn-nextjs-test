"use-client";

import { useContext, useEffect, useState } from "react";
import { ARTICLES_CONTEXT, HOME_CONTEXT } from "@/Context";
import { Card, Pagination } from "antd";
import Link from "next/link";

const TOTAL_ITEM_ON_PAGE = 25;

export default function Home() {
	const { articles } = useContext(ARTICLES_CONTEXT);
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	const sliceCurrentPageFrom = (currentPage - 1) * TOTAL_ITEM_ON_PAGE;
	const sliceCurrentPageTo = currentPage * TOTAL_ITEM_ON_PAGE;

	const slicedArticles = articles?.slice(
		sliceCurrentPageFrom,
		sliceCurrentPageTo
	);

	return (
		<section className="home-wrapper">
			<h1>All Articles</h1>
			{slicedArticles?.length > 0 &&
				slicedArticles?.map((article) => (
					<Link href={"/"}>
						<Card>
							<h4>{article?.title}</h4>

							<p> {article?.body} </p>
						</Card>
					</Link>
				))}

			<Pagination
				current={currentPage}
				onChange={onPageChange}
				total={articles?.length}
				pageSize={TOTAL_ITEM_ON_PAGE}
			/>
		</section>
	);
}
