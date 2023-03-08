import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
	HOME_ROUTE,
	PRIVACY_ROUTE,
	TERMS_ROUTE,
	WHERE_WE_SERVICE,
	SOCIAL_LINKS,
	PLACES_ROUTE,
} from "@/constants";
import Images from "@/themes/images";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CITY_CONTEXT } from "@/Context";
import { useRouter } from "next/router";

export default function Footer() {
	const { allCities } = useContext(CITY_CONTEXT);

	const router = useRouter();

	return (
		<div className="container" style={{ overflow: "hidden" }}>
			<footer className={styles.footer}>
				<div className={styles.topcontent}>
					<Row>
						<Col xs={24} lg={6}>
							<Image
								className={styles.logo}
								src={Images.FooterLogo}
								alt="Pushpoo"
								width={192}
								height={40}
								onClick={() => router.push(HOME_ROUTE)}
							/>
							<p className={styles.description}>
								We are helping the everyday pet owner find the best pet care by
								showing all veterinarian clinics, groomers, trainers, kennels
								and boarding facilities nearest them.
							</p>
						</Col>
						<Col xs={24} lg={12}>
							<h2 className={styles.title}>Areas we service</h2>
							<ul className={styles.areas}>
								{allCities?.length > 0 &&
									allCities.map((item, index) => (
										<li key={index}>
											<Link href={PLACES_ROUTE + "all-services/" + item.slug}>
												{item.title}
											</Link>
										</li>
									))}
							</ul>
						</Col>
						<Col xs={24} lg={6}>
							<h2 className={styles.title}>Contacts</h2>
							<a className={styles.mail} href="mailto:support@poshpuppo.com">
								<FontAwesomeIcon icon={faEnvelope} />
								support@poshpuppo.com
							</a>
							<h2 className={styles.title}>Social</h2>
							<ul className={styles.social}>
								{SOCIAL_LINKS.map((item, index) => (
									<li key={index}>
										<a href={item.link} target="_blank" rel="noreferrer">
											<Image
												src={item.thumb}
												height="auto"
												width="auto"
												alt=""
											/>
										</a>
									</li>
								))}
							</ul>
						</Col>
					</Row>
				</div>
				<div className={styles.bottomcontent}>
					<p>
						poshpuppo © 2022<span> / </span>
						<Link href={PRIVACY_ROUTE}>Privacy Policy</Link> <span> / </span>
						<Link href={TERMS_ROUTE}>Terms and Conditions</Link>
						<span> / </span> All rights reserved
					</p>
				</div>
			</footer>
		</div>
	);
}
