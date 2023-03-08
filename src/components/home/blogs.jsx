import { BLOGDETAIL_ROUTE, HOME_BLOGS } from "@/constants";
import styles from "@/styles/home/Blogs.module.css";
import Image from "next/image";
import Link from "next/link";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

export default function LatestBlogs({ blogs }) {
	return (
		<section className={styles.blogswrapper}>
			<h4 className="sub-title odd" data-aos="fade-up">
				Our blog
			</h4>
			<h2 className="sec-title" data-aos="fade-up" data-aos-delay={100}>
				latest blog posts
			</h2>
			<div className={styles.blogslist}>
				{blogs?.length > 0 &&
					blogs.map((item, index) => (
						<Link
							href={BLOGDETAIL_ROUTE.replace(":slug", item.slug)}
							className={styles.blog}
							key={index}
							data-aos="fade-up"
							data-aos-delay={200 * (index + 1)}
						>
							<div className={styles.thumb}>
								<Image
									src={item.thumb}
									fill
									sizes="100%,100%"
									alt={item.slug}
								/>
							</div>
							<div className={styles.content}>
								<h3>{item.title}</h3>
								<div className={styles.article}>
									<ReactMarkdown
										unwrapDisallowed={false}
										rehypePlugins={[rehypeRaw]}
									>
										{item?.description?.length > 150
											? item?.description?.slice(0, 150) + "..."
											: item?.description}
									</ReactMarkdown>
								</div>
							</div>
							<span className={styles.readmore}>READ MORE</span>
						</Link>
					))}
			</div>
		</section>
	);
}
