import styles from "@/styles/Place.module.css";
import Image from "next/image";
import { Rate } from "antd";
import { useEffect, useState } from "react";
import { getLocationReviewsRequest } from "@/apis/review";
import images from "@/themes/images";
import Loader from "../global/Loader";

export default function CustomerReviews({ data }) {
	const [allReviews, setAllReviews] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [initialLoader, setInitialLoader] = useState(true);
	const [moreLoader, setMoreLoader] = useState(false);

	useEffect(() => {
		getInitialReviews();
	}, []);

	const getInitialReviews = () => {
		getLocationReviewsRequest({
			payloadData: { locationId: data?.id, start: allReviews?.length },
			responseCallback: (status, reviews) => {
				setInitialLoader(false);
				if (status) {
					setAllReviews(reviews?.data);
					setTotalItems(reviews?.total);
				}
			},
		});
	};

	const handleGetMoreReviews = () => {
		setMoreLoader(true);
		getLocationReviewsRequest({
			payloadData: { locationId: data?.id, start: allReviews?.length },
			responseCallback: (status, reviews) => {
				setMoreLoader(false);
				if (status) {
					setAllReviews([...allReviews, ...reviews?.data]);
					setTotalItems(reviews?.total);
				}
			},
		});
	};

	return (
		<>
			<div className={styles.customerreviews} id="reviews">
				<h2>Customer reviews</h2>
				<div className={styles.reviewslist}>
					{initialLoader && <Loader size={30} />}

					{!initialLoader &&
						allReviews?.length > 0 &&
						allReviews.map((item, index) => (
							<div className={styles.reviewbox} key={index}>
								<div className={styles.profile}>
									<div className={styles.thumb}>
										<Image
											src={item?.image ?? images.User1}
											alt={item.name}
											fill
											sizes="100%,100%"
										/>
									</div>
									<p>{item?.name}</p>
								</div>
								<div className={styles.ratebox}>
									<Rate
										className="theme-star"
										disabled
										defaultValue={item?.rating}
									/>
								</div>
								<p className={styles.review}>{item?.comment}</p>
							</div>
						))}

					{!initialLoader && allReviews?.length === 0 && (
						<div className={styles.reviewbox}>
							<p>No reviews for now.</p>
						</div>
					)}
				</div>

				{allReviews?.length < totalItems && (
					<button className={styles.morereviews} onClick={handleGetMoreReviews}>
						{moreLoader ? <Loader size={30} /> : "more..."}
					</button>
				)}
			</div>
		</>
	);
}
