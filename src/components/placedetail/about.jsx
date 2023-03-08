import styles from "@/styles/Place.module.css";

export default function About({ aboutUs }) {
	return (
		<div className={styles.about}>
			<h2>About us</h2>
			<p>{aboutUs}</p>
		</div>
	);
}
