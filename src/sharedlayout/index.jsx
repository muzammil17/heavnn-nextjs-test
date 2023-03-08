import { getAllArticles } from "@/apis/articles";
import { ARTICLES_CONTEXT } from "@/Context";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

export default function SharedLayout({ children }) {
	const { setArticles } = useContext(ARTICLES_CONTEXT);
	const [limit, setLimit] = useState(25);

	useEffect(() => {
		getInitialInfo();
	}, []);

	const getInitialInfo = () => {
		getAllArticles({
			responseCallback: (status, data) => {
				if (status) {
					setArticles(data);
				}
			},
		});
	};

	return (
		<>
			<Head>
				<title>Next js App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="page-wrapper">{children}</div>
		</>
	);
}
