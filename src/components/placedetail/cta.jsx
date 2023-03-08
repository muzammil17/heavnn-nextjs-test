import styles from "@/styles/Place.module.css";
import Image from "next/image";
import { Modal } from "antd";
import Images from "@/themes/images";
import { useState } from "react";

export default function Cta({ data }) {
	const [modalPreview, setModalPreview] = useState(false);

	const handleCloseModal = () => {
		setModalPreview(false);
	};

	// const bookingLink = data?.bookingLink?.includes("http")
	// 	? data?.bookingLink
	// 	: `https://${data?.bookingLink}`;

	return (
		<>
			<div className={styles.cta}>
				<button
					onClick={() => {
						!data?.trusted && setModalPreview(!modalPreview);
					}}
					className={`${styles.claim} ${data?.trusted ? styles.claimed : ""}`}
				>
					{data?.trusted && (
						<Image src={Images.ClaimedIcon} alt="" width={17} height={17} />
					)}
					{data?.trusted ? "TRUSTED POSHPUPPO PARTNER" : "claim profile"}
				</button>

				<a
					className={styles.booknow}
					href={data?.bookingLink}
					target="_blank"
					rel="noreferrer"
				>
					book appointment
				</a>
			</div>
			<Modal
				width={816}
				closeIcon={
					<Image src={Images.CloseIcon} alt="" width={21} height={21} />
				}
				centered
				footer={null}
				className="cta-modal"
				open={modalPreview}
				onCancel={handleCloseModal}
			>
				<div className={styles.claimdetail}>
					<h4>claim profile</h4>
					<h1>Do you want to claim your business profile?</h1>
					<h2>Please contact us by email</h2>
					<Image src={Images.ArrowDownIcon} alt="" width={25} height={25} />
					<p>
						<Image
							src={Images.CopyIcon}
							alt=""
							width={10}
							height={12}
							onClick={() => {
								navigator.clipboard.writeText("support@poshpuppo.com");
							}}
						/>
						<a href="mailto:support@poshpuppo.com">support@poshpuppo.com</a>
					</p>
				</div>
			</Modal>
		</>
	);
}
