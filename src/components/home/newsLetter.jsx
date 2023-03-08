import React from "react";
import styles from "@/styles/home/NewsLetter.module.css";
import { Button, Col, Form, Input, Row } from "antd";
import { createNewsLetter } from "@/apis/newsLetter";
import { toastAlert } from "@/services/utils";
import { ALERT_TYPES } from "@/constants";

const newsLetter = () => {
	const [form] = Form.useForm();

	const handleSubmit = (val) => {
		console.log({ val });

		createNewsLetter({
			payloadData: val,
			responseCallback: (status, message) => {
				form?.resetFields();
				if (status) {
					toastAlert(message);
				} else {
					toastAlert(message, ALERT_TYPES.error);
				}
			},
		});
	};

	return (
		<section className={styles.newsLetterWrapper}>
			<div className="container">
				<div className={`${styles.newsLetter} newsLetter`}>
					<Row>
						<Col md={12} sm={24} xs={24}>
							<div className={styles.newsLetter_desc}>
								<h4>Join our newsletter!</h4>

								<p>
									Each month you'll receive a curated list of all the best pet
									gear with special offers!
								</p>
							</div>
						</Col>

						<Col md={12} sm={24} xs={24}>
							<Form
								className={`${styles.newsLetter_form} `}
								form={form}
								onFinish={handleSubmit}
							>
								<Form.Item
									name={"email"}
									rules={[
										{
											type: "email",
											message: "Email is required.",
										},
									]}
								>
									<Input
										className={"newsLetter_formInput"}
										placeholder={"Enter your email..."}
									/>
								</Form.Item>

								<Button className={styles.newsLetter_form_btn} type="submit">
									JOIN US
								</Button>
							</Form>
						</Col>
					</Row>
				</div>
			</div>
		</section>
	);
};

export default newsLetter;
