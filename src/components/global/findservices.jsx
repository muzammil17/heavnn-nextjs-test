import { useEffect } from "react";
import styles from "@/styles/Findservices.module.css";
import { Col, Form, Row, Select } from "antd";
import { useRouter } from "next/router";
import { WHERE_WE_SERVICE, SERVICES, PLACES_ROUTE } from "@/constants";

export default function FindService({
	services,
	service,
	city,
	classname = "",
	isHome,
	allCities,
}) {
	const router = useRouter();
	const [form] = Form.useForm();
	const handleFormFinish = (values) => {
		router.push(PLACES_ROUTE + values.services + "/" + values.nearestcity);
	};
	useEffect(() => {
		setInfo();
	}, [service, city]);

	const setInfo = () => {
		form.setFieldsValue({
			services: service ?? SERVICES[0].key,
			nearestcity: city,
		});
	};

	return (
		<div
			className={`${styles.petservices} ${classname} ${
				isHome ? "animate__animated animate__fadeInUp" : ""
			}`}
		>
			<h2>PET SERVICES NEAR YOU</h2>
			<Form form={form} className={styles.form} onFinish={handleFormFinish}>
				<Row gutter={[30, 0]}>
					<Col className={styles.formitem} xs={24} md={12} lg={9}>
						<label>Choose the city closest to you*</label>
						<Form.Item
							name="nearestcity"
							rules={[
								{
									required: true,
									message: "Nearest city is required",
								},
							]}
						>
							<Select
								className="customselect"
								placeholder="Choose nearest city"
								filterOption={(input, option) =>
									option.children.toLowerCase().includes(input.toLowerCase())
								}
							>
								{allCities?.length > 0 &&
									allCities.map((data, index) => (
										<Select.Option value={data.slug} key={data.key}>
											{data.title}
										</Select.Option>
									))}
							</Select>
						</Form.Item>
					</Col>
					<Col className={styles.formitem} xs={24} md={12} lg={9}>
						<label>What pet service are you looking for?*</label>
						<Form.Item
							name="services"
							rules={[
								{
									required: true,
									message: "Service is required",
								},
							]}
						>
							<Select
								className="customselect"
								placeholder="SELECT SERVICE"
								filterOption={(input, option) =>
									option.children.toLowerCase().includes(input.toLowerCase())
								}
							>
								<Select.Option value={"all-services"}>
									All Services
								</Select.Option>

								{services?.length > 0 &&
									services.map((data) => (
										<Select.Option value={data.slug} key={data.key}>
											{data.title}
										</Select.Option>
									))}
							</Select>
						</Form.Item>
					</Col>
					<Col
						className={styles.formitem}
						xs={24}
						lg={6}
						style={{ paddingRight: 0 }}
					>
						<button>search</button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}
