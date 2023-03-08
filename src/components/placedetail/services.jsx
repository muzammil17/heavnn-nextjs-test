import { PLACE_SERVICES } from "@/constants";
import Image from "next/image";
import styles from "@/styles/Place.module.css";

export default function Services({ services }) {
	return (
		<div className={styles.servicebox}>
			<h2>Services</h2>
			<ul>
				{services?.length > 0 &&
					services.map((item, index) => (
						<li key={index}>
							<Image
								src={item.iconImage}
								alt={item.name}
								width={10}
								height={10}
							/>
							<span>{item.name}</span>
						</li>
					))}
			</ul>
		</div>
	);
}
