import { useRouter } from "next/router";
import { PageTitle, Map } from "@/components/global";
import {
	Services,
	Rating,
	About,
	Cta,
	LocationDetail,
	AddReviewBox,
	CustomerReviews,
	PlaceDetail,
} from "@/components/placedetail";
import { Col, Row } from "antd";
import { PLACES } from "@/constants";
import styles from "@/styles/Place.module.css";
import { getLocation } from "@/apis/location";
import { getSingleLocationManipulator } from "@/manipulator/location";

export async function getServerSideProps({ params }) {
	const { slug } = params;
	try {
		const response = await getLocation({ slug });
		if (response?.data) {
			const locationInfo = getSingleLocationManipulator(response?.data?.[0]);
			return {
				props: {
					data: locationInfo,
				},
			};
		}

		return {
			props: {},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {},
		};
	}
}

export default function Place({ data }) {
	const router = useRouter();
	const { slug } = router.query;
	// const data = PLACES.find((x) => x.slug === slug);
	return (
		<section className="places-wrapper">
			{data && (
				<div className="container">
					<PageTitle isImage thumb={data?.thumb} title={data.title} />
					<div className={styles.contentbox}>
						<Row>
							<Col xs={24} lg={13} xl={12}>
								<div className={styles.detailbox}>
									<Row>
										<Col xs={24} md={10}>
											<Services services={data?.services} />
										</Col>
										<Col xs={24} md={14}>
											<Rating data={data} />
										</Col>
									</Row>
								</div>
								<div className={styles.desktopview}>
									<About aboutUs={data?.aboutUs} />
									<Cta data={data} />
								</div>
							</Col>
							<Col xs={24} lg={11} xl={12}>
								<LocationDetail data={data} />
								<Map
									data={data}
									mapclass={styles.map}
									containerclass={styles.mapbox}
									selectedPlace={data?.position}
								/>
							</Col>
							<Col xs={24} lg={9}>
								<div className={styles.mobileview}>
									<Cta data={data} />
									<About aboutUs={data?.aboutUs} />
								</div>
								<AddReviewBox data={data} />
							</Col>
							<Col xs={24} lg={15}>
								<CustomerReviews data={data} />
							</Col>
						</Row>
					</div>
				</div>
			)}
		</section>
	);
}
