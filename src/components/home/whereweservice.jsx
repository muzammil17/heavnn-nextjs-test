import styles from "@/styles/home/whereweservice.module.css";
import { HOME_ROUTE, PLACES_ROUTE, WHERE_WE_SERVICE } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Whereweservice({ allCities }) {
	const listLength = Math.ceil([...allCities].length / 6);
	return (
		<section className={styles.whereweservicewrapper}>
			<div className="container">
				<h4 className="sub-title" data-aos="fade-up">
					THE AREAS
				</h4>
				<h2 className="sec-title" data-aos="fade-up" data-aos-delay={100}>
					WHERE WE SERVICE
				</h2>
				<div className={styles.services}>
					{[...new Array(listLength).keys()].map((data, index) => (
						<ul
							className={styles.servicelist}
							key={index}
							data-aos="fade-up"
							data-aos-delay={250}
						>
							{[...allCities]
								.slice(data * 6, 6 * (index + 1))
								.map((item, i) => (
									<Link
										href={PLACES_ROUTE + "all-services/" + item.slug}
										key={i}
									>
										<li className={styles.serviceitem}>
											{item.title}
											<FontAwesomeIcon icon={faChevronRight} />
										</li>
									</Link>
								))}
						</ul>
					))}
				</div>
			</div>
		</section>
	);
}
