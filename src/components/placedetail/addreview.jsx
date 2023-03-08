import styles from "@/styles/Place.module.css";
import Image from "next/image";
import { Form, Modal, Rate, Input } from "antd";
import Images from "@/themes/images";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { createReviewRequest } from "@/apis/review";
import { IMAGE_CONTEXT } from "@/Context";
import Loader from "../global/Loader";
const { TextArea } = Input;
export default function AddReviewBox({ data }) {
	const [form] = Form.useForm();
	const [modalPreview, setModalPreview] = useState(false);
	const { imageRanId } = useContext(IMAGE_CONTEXT);
	const [reviewLoader, setReviewLoader] = useState(false);

	const handleCloseModal = () => {
		setModalPreview(false);
	};
	const handleFormFinish = (values) => {
		const payload = {
			data: {
				...values,
				location: { connect: [{ id: data?.id }] },
				review_image: { connect: [{ id: imageRanId }] },
			},
		};

		setReviewLoader(true);

		createReviewRequest({
			payloadData: payload,
			responseCallback: (status) => {
				setReviewLoader(false);
				if (status) {
					form.resetFields();
					toast.success("Review added sucessfully");
					setModalPreview(false);
				} else {
					toast.error("Something went wrong.");
				}
			},
		});
	};

	return (
		<>
			<div className={styles.addreviewbox}>
				<h2>Review this place</h2>
				<button
					onClick={() => {
						setModalPreview(!modalPreview);
					}}
				>
					Write a review
				</button>
			</div>
			<Modal
				width={754}
				closeIcon={
					<Image src={Images.DarkCloseIcon} alt="" width={21} height={21} />
				}
				centered
				footer={null}
				className="review-modal"
				open={modalPreview}
				onCancel={handleCloseModal}
			>
				<div className={styles.reviewform}>
					<h4>share your experience</h4>
					<h1>REVIEW</h1>
					<p>
						{data?.title} of {data?.state}
					</p>
					<div className={styles.locationbox}>
						<FontAwesomeIcon icon={faLocationDot} />
						<span>{data?.address1}</span>
					</div>
					<Form form={form} className={styles.form} onFinish={handleFormFinish}>
						<div className={styles.center}>
							<label>Overall rating</label>
							<Form.Item
								name="rating"
								rules={[
									{
										required: true,
										message: "Rating is required",
									},
								]}
							>
								<Rate />
							</Form.Item>
						</div>
						<label>Add a written review</label>
						<Form.Item
							name="comment"
							rules={[
								{
									whitespace: true,
									message: "Invalid review",
								},
							]}
						>
							<TextArea placeholder="START TYPING HERE..." />
						</Form.Item>
						<label>Your name</label>
						<Form.Item
							name="name"
							rules={[
								{
									required: true,
									whitespace: true,
									message: "Name is required",
								},
							]}
						>
							<Input placeholder="START TYPING HERE..." />
						</Form.Item>
						<button className={styles.submitbtn}>
							{reviewLoader ? (
								<Loader size={30} color={"#F89766"} />
							) : (
								"send review"
							)}
						</button>
					</Form>
				</div>
			</Modal>
		</>
	);
}
