import { PLACES_ROUTE } from "@/constants";
import styles from "@/styles/home/Getstarted.module.css";
import Images from "@/themes/images";
import Image from "next/image";
import Link from "next/link";

export default function Getstarted({ homePageInfo }) {
	const STEPS = [
		{
			thumb: Images.Getstarted1,
			content: "Search for the pet service you are looking for.",
		},
		{
			thumb: Images.Getstarted2,
			content: "Read reviews and find the perfect place for your pet near you.",
		},
		{
			thumb: Images.Getstarted3,
			content: "Contact the business directly to book your pets appointment.",
		},
	];

	const steps = homePageInfo?.getStarted ?? STEPS;
	return (
		<section className={styles.getstartedwrapper}>
			<h4 className="sub-title" data-aos="fade-up">
				GET STARTED
			</h4>
			<h2 className="sec-title" data-aos="fade-up" data-aos-delay={100}>
				POSHPUPPO IS PET CARE, MADE EASY
			</h2>
			<div className={styles.stepswrapper}>
				{steps?.length > 0 &&
					steps.map((item, index) => (
						<div className={styles.stepbox} key={index}>
							<div
								className={styles.thumbbox}
								data-aos="fade-up"
								data-aos-delay={150 * (index + 1)}
							>
								<Image
									src={item.icon}
									alt={index + 1}
									sizes="100%, 100%"
									height={80}
									width={80}
									// style={{
									// 	maxHeight: 80,
									// 	maxWidth: 80,
									// }}
								/>
							</div>
							<h4>{index + 1}</h4>
							<p>{item?.content}</p>
						</div>
					))}
			</div>
			<Link href={PLACES_ROUTE + "all-services"}>
				<button className={styles.getstarted}>Get STARTED</button>
			</Link>
		</section>
	);
}
