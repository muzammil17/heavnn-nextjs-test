import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styles from "@/styles/BlogDetail.module.css";
import Image from "next/image";
import { PageTitle } from "@/components/global";
import { getBlogsManipulator } from "@/manipulator/blog";
import { getSingleBlog } from "@/apis/blog";
import Head from "next/head";
import Title from "@/components/Title";

export async function getServerSideProps({ params }) {
	const slug = params.slug;
	let blog = null;

	try {
		const response = await getSingleBlog({ payloadData: { slug } });

		if (response.data) {
			blog = getBlogsManipulator(response.data)?.[0];
		}

		return {
			props: {
				blog,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				blog: {},
			},
		};
	}
}

export default function BlogDetail({ blog }) {
	const data = blog;

	return (
		<section className="blogdetail-wrapper">
			{/* <Title title={data?.titleTag} /> */}

			<Head>
				<title>{data?.titleTag}</title>
				<meta property="description" content={data?.metaDescription} />
			</Head>

			{data && (
				<div className="container">
					<PageTitle title={data?.title} />
					<div className={styles.contentbox}>
						<div className={styles.thumb}>
							<Image
								src={data.thumb}
								alt={data.title}
								sizes={"100%,100%"}
								fill
							/>
						</div>
						<div className={styles.content}>
							<h4 className={styles.date}>{data?.date}</h4>
							<ReactMarkdown
								unwrapDisallowed={false}
								rehypePlugins={[rehypeRaw]}
							>
								{data?.description}
							</ReactMarkdown>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
