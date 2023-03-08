import { Rate } from "antd";
import styles from "@/styles/Place.module.css";

export default function Rating({ data }) {
	const reviews = data?.reviews;

	return (
		<div className={styles.ratingbox}>
			<h2>Pets Accepted</h2>
			<ul className={styles.services}>
				{data?.tags?.length > 0 &&
					data?.tags?.map((item, index) => <li key={index}>{item?.name}</li>)}
			</ul>
			<h2 style={{ margin: 0 }}>Overall rating</h2>
			<h1> {data?.rating} </h1>
			<div className={styles.rating}>
				<Rate disabled value={data?.rating ?? 0} />
				<a className={styles.reviewbased} href="#reviews">
					{reviews?.length > 0 ? (
						<span> ( based on {reviews?.length} reviews )</span>
					) : (
						<span>( no reviews )</span>
					)}
				</a>
			</div>
		</div>
	);
}
