import styles from "@/styles/home/Bussiness.module.css";
import Images from "@/themes/images";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import Image from "next/image";

export default function Business({ homePageInfo }) {
	const isBrowser = () => typeof window !== "undefined";
	const scrollToTop = () => {
		if (!isBrowser()) return;
		window.scrollTo({ top: 20, behavior: "smooth" });
	};
	return (
		<section className={styles.business}>
			<Row style={{ flexDirection: "row-reverse" }}>
				<Col xs={24} lg={12}>
					<div className={styles.thumbbox}>
						<Image
							src={homePageInfo?.businessesSectionImage ?? Images.BusinessThumb}
							alt=""
							fill
							sizes="100%,100%"
						/>
					</div>
				</Col>
				<Col xs={24} lg={12}>
					<div className={styles.content}>
						<h4 data-aos="fade-up">for businesses</h4>
						<h2 data-aos="fade-up" data-aos-delay={100}>
							{homePageInfo?.businessesSectionTitle ??
								"Helping pet care businesses Get more business"}
						</h2>
						<p>
							{homePageInfo?.businessesSectionContent ??
								`We want to help your business thrive by helping the everyday pet
							owner find the service they need by featuring your business. By
							providing more online visibility for you business you get more
							business because of poshpuppo.`}
						</p>
						<p>
							Want to be featured on our directory or find a way to partner
							together?
						</p>
						<a href="mailto:support@poshpuppo.com">
							<button>Contact Us</button>
						</a>
					</div>
				</Col>
			</Row>
			<span
				className={styles.backtotop}
				onClick={scrollToTop}
				data-aos="fade-up"
				data-aos-delay={200}
			>
				<FontAwesomeIcon icon={faChevronUp} />
			</span>
		</section>
	);
}
