import styles from "@/styles/home/Hero.module.css";
export default function Herosec({ homePageInfo }) {
	console.log({ homePageInfo });
	return (
		<div
			className={styles.herowrapper}
			style={{
				...(homePageInfo?.heroImage
					? {
							backgroundImage: `url(${homePageInfo?.heroImage})`,
					  }
					: {}),
			}}
		>
			<h4 className="animate__animated animate__fadeInUp">
				{homePageInfo?.heroTitleOne ?? "PET CARE, MADE EASY"}
			</h4>
			<h1 className="animate__animated animate__fadeInUp">
				{homePageInfo?.heroTitleTwo ?? "Find the best for your pet"}
			</h1>
			<p className="animate__animated animate__fadeInUp">
				{homePageInfo?.heroContent ?? (
					<>
						Get your dog the care they deserve. poshpuppo allows you to find the
						best dog grooming, veterinarians, trainers, boarding and kennels{" "}
						<b>near you.</b>
					</>
				)}
			</p>
		</div>
	);
}
