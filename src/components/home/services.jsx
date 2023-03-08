import { PLACES_ROUTE } from "@/constants";
import styles from "@/styles/home/Services.module.css";
import Images from "@/themes/images";
import Image from "next/image";
import Link from "next/link";

export default function Services(props) {
	const { services, homePageInfo } = props;

	return (
		<section className={styles.serviceswrapper}>
			<h4 className="sub-title" data-aos="fade-up">
				our services
			</h4>
			<h2 className="sec-title" data-aos="fade-up" data-aos-delay={100}>
				{homePageInfo?.servicesTitle ?? "SERVICES FOR YOUR PET"}
			</h2>
			<p className={styles.secdescription}>
				{homePageInfo?.servicesContent ??
					`We make it easy to find the best pet services near you. Whether you are
				looking for groomers, vets, boarding, dog training or the closest pet
				store, we have your back with a curated list of the best options near
				you.`}
			</p>
			<div className={styles.services}>
				{services?.length > 0 &&
					services.map((item, index) => (
						<Link
							href={PLACES_ROUTE + item.slug}
							className={styles.servicebox}
							key={item?.id}
							data-aos="fade-up"
							data-aos-delay={index * 150}
						>
							<Image
								className={styles.servicethumb}
								src={item.image}
								alt={item.title}
								width={86}
								height={79}
							/>
							<h4>{item.title}</h4>
						</Link>
					))}
			</div>
		</section>
	);
}
