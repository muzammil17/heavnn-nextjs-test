import Head from "next/head";
import { useRouter } from "next/router";
import { PageTitle, FindService, Map } from "@/components/global";
import { Col, Row, Dropdown, Rate } from "antd";
import { useContext, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { PLACES, PLACE_ROUTE } from "@/constants";
import Image from "next/image";
import styles from "@/styles/Places.module.css";
import Link from "next/link";
import { CITY_CONTEXT, META_CONTEXT, SERVICE_CONTEXT } from "@/Context";
import { getAllLocations } from "@/apis/location";
import Loader from "@/components/global/Loader";
import images from "@/themes/images";

const MILES = [{ label: 30 }, { label: 50 }, { label: 100 }];

const ServiceBox = ({ data, selectedPlace, setPlace }) => {
	// const bookingLink = data?.bookingLink?.includes("http")
	// 	? data?.webLink
	// 	: `https://${data?.bookingLink}`;

	return (
		<div
			className={`${styles.place} ${
				selectedPlace?.slug === data.slug ? styles.active : ""
			}`}
			onClick={() => {
				setPlace(data);
			}}
		>
			<div className={styles.detail}>
				<div className={styles.thumb}>
					<Image src={data.thumb} alt={data.title} fill sizes="100%, 100%" />
				</div>
				<div className={styles.content}>
					<h3>{data.title}</h3>
					<div className={styles.rating}>
						<Rate className="theme-star" disabled defaultValue={data.rating} />
					</div>
				</div>
			</div>
			<p className={styles.address}>
				{/* <FontAwesomeIcon icon={faLocationDot} height={13} width={9.42} />
				 */}

				<img
					src={images.MapMarker.src}
					height={13}
					width={9.42}
					style={{ marginRight: 12 }}
				/>
				<span>
					{data.address1} {data?.address2}
				</span>
			</p>
			<ul className={styles.services}>
				{data?.tags?.length > 0 &&
					data?.tags.map((item, index) => <li key={index}>{item?.name}</li>)}
			</ul>
			<div className={styles.cta}>
				<a
					href={data?.bookingLink}
					target="_blank"
					rel="noreferrer"
					className={styles.booknow}
				>
					book now
				</a>
				<Link href={PLACE_ROUTE + data.slug} className={styles.seemore}>
					see more information
				</Link>
			</div>
		</div>
	);
};

export default function Places() {
	const { services } = useContext(SERVICE_CONTEXT);
	const { allCities } = useContext(CITY_CONTEXT);
	const { metaInfo } = useContext(META_CONTEXT);

	const [selectedPlace, setselectedPlace] = useState({});
	const [allLoctions, setAllLocations] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [selectedFiter, setselectedFiter] = useState(MILES[0].label);
	const [initialLoader, setInitialLoader] = useState(true);
	const [moreDataLoading, setMoreDataLoading] = useState(false);

	const router = useRouter();
	const { slug } = router.query;
	const serviceSlug = slug?.[0];
	const place = slug?.[1] ?? allCities?.[0]?.slug;

	const selectedService = services?.find(
		(service) => service?.slug === serviceSlug
	);

	const selectedCity = allCities?.find((city) => city?.slug === place);

	const ITEMS = [
		{
			label: (
				<span
					className={selectedFiter === MILES[0]?.label ? "active" : ""}
					onClick={() => {
						setselectedFiter(MILES[0]?.label);
						setTotalItems(0);
					}}
				>
					with {MILES[0]?.label} miles
				</span>
			),
			key: "0",
		},
		{
			label: (
				<span
					className={selectedFiter === MILES[1]?.label ? "active" : ""}
					onClick={() => {
						setselectedFiter(MILES[1]?.label);
						setTotalItems(0);
					}}
				>
					with {MILES[1]?.label} miles
				</span>
			),
			key: "1",
		},
		{
			label: (
				<span
					className={selectedFiter === MILES[2]?.label ? "active" : ""}
					onClick={() => {
						setselectedFiter(MILES[2]?.label);
						setTotalItems(0);
					}}
				>
					with {MILES[2]?.label} miles
				</span>
			),
			key: "3",
		},
	];

	const selectedPlaceHandler = (place) => {
		setselectedPlace({ ...place });
	};

	const getInitialLocations = () => {
		if (place || allCities?.length > 0) {
			setInitialLoader(true);
			getAllLocations({
				payloadData: {
					place: place ?? allCities?.[0]?.slug,
					services: serviceSlug,
					miles: selectedFiter,
				},
				responseCallback: (status, data) => {
					if (status) {
						const incomingLocations = [...data?.locations].sort(
							(a, b) => a?.miles - b?.miles
						);

						setAllLocations([...incomingLocations]);
						setselectedPlace(data?.locations?.[0] ?? {});
						setTotalItems(data?.total);
						setInitialLoader(false);
					} else {
						setInitialLoader(false);
					}
				},
			});
		}
	};

	useMemo(() => {
		getInitialLocations();
	}, [slug, allCities, selectedFiter]);

	const handleGetMoreLocations = () => {
		setMoreDataLoading(true);
		getAllLocations({
			payloadData: {
				place: place,
				services: serviceSlug,
				start: allLoctions?.length,
				miles: selectedFiter,
			},
			responseCallback: (status, data) => {
				setMoreDataLoading(false);
				if (status) {
					const incomingLocations = [...allLoctions, ...data?.locations].sort(
						(a, b) => a?.miles - b?.miles
					);

					setAllLocations(incomingLocations);
					setTotalItems(data?.total);
				}
			},
		});
	};

	console.log({ selectedPlaceMain: selectedPlace });

	return (
		<section className="places-wrapper">
			<Head>
				<title> {metaInfo?.location_listing_meta_title ?? "Poshpuppo"} </title>
				{metaInfo?.metaInfo?.location_listing_meta_description && (
					<meta
						name="description"
						content={metaInfo?.metaInfo?.location_listing_meta_description}
					/>
				)}
			</Head>
			<div className="container">
				<PageTitle classname={styles.pagettl} />
				<FindService
					classname={styles.findservice}
					city={place}
					service={serviceSlug}
					services={services}
					allCities={allCities}
				/>
				<div className={styles.contentbox}>
					{initialLoader && <Loader />}

					{!initialLoader && (
						<Row style={{ flexDirection: "row-reverse" }}>
							<Col xs={24} lg={12} xl={12}>
								<div className={styles.filterbox}>
									<span className={styles.filterlabel}>Filters:</span>
									<div className="custom-filter-btn">
										<Dropdown
											getPopupContainer={(triggerNode) =>
												triggerNode.parentElement
											}
											menu={{
												items: ITEMS,
											}}
											trigger={["click"]}
										>
											<span className="selected-text">
												<span>with {selectedFiter} miles</span>
												<FontAwesomeIcon icon={faCaretDown} />
											</span>
										</Dropdown>
									</div>
								</div>
								<Map
									selectedPlace={selectedPlace?.slug}
									isMultiple
									markers={allLoctions}
									mapclass={styles.map}
									containerclass={styles.mapbox}
									selectedLocation={selectedPlace}
								/>
							</Col>
							<Col xs={24} lg={12} xl={12}>
								<div className={styles.detailbox}>
									<div>
										<h2>
											{selectedService?.title ?? "All services"} near{" "}
											{selectedCity?.title}, {selectedCity?.state}{" "}
										</h2>

										<span>
											{" "}
											{allLoctions?.length ?? 0}{" "}
											{allLoctions?.length == 1 ? "Result" : "Results"}{" "}
										</span>
									</div>

									{allLoctions?.length > 0 ? (
										<p>
											poshpuppo provides the best list of{" "}
											{selectedService?.title} near {selectedCity?.title},{" "}
											{selectedCity?.state}. {selectedService?.description}{" "}
											Don't see your business on our list?{" "}
											<a href="mailto:support@poshpuppo.com">Contact us</a> and
											we'd happily add you.
										</p>
									) : (
										<p>No result found.</p>
									)}
								</div>

								<div className={styles.places}>
									{!initialLoader &&
										allLoctions?.length > 0 &&
										allLoctions.map((item, index) => (
											<ServiceBox
												key={index}
												data={item}
												setPlace={selectedPlaceHandler}
												selectedPlace={selectedPlace}
											/>
										))}
								</div>

								{allLoctions?.length < totalItems && (
									<button
										className={styles.showmoredata}
										onClick={handleGetMoreLocations}
									>
										{moreDataLoading ? <Loader size={30} /> : "Show more..."}
									</button>
								)}
							</Col>
						</Row>
					)}
				</div>
			</div>
		</section>
	);
}
