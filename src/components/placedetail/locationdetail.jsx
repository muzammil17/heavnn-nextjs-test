import { Row, Col } from "antd";
import styles from "@/styles/Place.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faEnvelope,
	faGlobe,
	faLocationDot,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function LocationDetail({ data }) {
	const webLink = data?.webLink?.includes("http")
		? data?.webLink
		: `https://${data?.webLink}`;

	return (
		<div className={styles.locationdtlbox}>
			<Row gutter={[30, 0]}>
				<Col xs={24} md={8} lg={24} xl={8} className={styles.locationdtlwrap}>
					<div className={styles.addressbox}>
						<h2>Address</h2>
						<div className={styles.locationdtl}>
							<FontAwesomeIcon className={styles.thumb} icon={faLocationDot} />
							<div>
								<p>
									{data?.address1} {data?.address2}
								</p>
								<p>
									{data?.zipcode && data?.zipcode + ","} {data?.state}
								</p>
							</div>
						</div>
					</div>
				</Col>
				<Col xs={24} md={8} xl={8} className={styles.locationdtlwrap}>
					<div className={styles.hoursbox}>
						<h2>We are open</h2>
						{data?.openCloseTime &&
							data?.openCloseTime?.map((item, index) => (
								<div className={styles.locationdtl} key={index}>
									{index === 0 && (
										<FontAwesomeIcon className={styles.thumb} icon={faClock} />
									)}
									<p style={{ marginLeft: index !== 0 ? "20px" : 0 }}>
										{item?.day}
										<span> {item?.time}</span>
									</p>
								</div>
							))}
					</div>
				</Col>
				<Col xs={24} md={8} xl={8} className={styles.locationdtlwrap}>
					<div className={styles.contactbox}>
						<h2>Contacts</h2>
						<a href={"mailto:" + data?.email}>
							<div className={styles.locationdtl}>
								<FontAwesomeIcon className={styles.thumb} icon={faEnvelope} />
								<p>{data?.email}</p>
							</div>
						</a>

						{data?.webLink && (
							<a href={webLink} target="_blank" rel="noreferrer">
								<div className={styles.locationdtl}>
									<FontAwesomeIcon className={styles.thumb} icon={faGlobe} />
									<p> {data?.webLink} </p>
								</div>
							</a>
						)}
						<a href={`tel:+1${data?.phoneNumber}`}>
							<div className={styles.locationdtl}>
								<FontAwesomeIcon className={styles.thumb} icon={faPhone} />
								<p>{data?.phoneNumber}</p>
							</div>
						</a>
					</div>
				</Col>
				<Col xs={24}>
					<div className={styles.getdirection}>
						<a
							href={`https://google.com/maps/?q=${data?.position?.lat},${data?.position?.lng}`}
							target="_blank"
							rel="noreferrer"
						>
							Get Directions
						</a>
					</div>
				</Col>
			</Row>
		</div>
	);
}
