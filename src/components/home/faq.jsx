import { useContext, useState } from "react";
import styles from "@/styles/home/Faq.module.css";
import { FAQS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { QUESTIONS_CONTEXT } from "@/Context";

const FaqItem = ({ title, description }, isOpen, setOpen, index) => {
	return (
		<div
			className={`${styles.faqitem}`}
			key={index}
			data-aos="fade-up"
			data-aos-delay={120 * (index + 1)}
		>
			<div
				className={`${styles.faqtitle} ${
					isOpen === index ? styles.active : ""
				}`}
				onClick={() => {
					setOpen(isOpen === index ? null : index);
				}}
			>
				<h3>{title}</h3>
				<button>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
			<div
				className={`${styles.faqdescription} ${
					isOpen === index ? styles.active : ""
				}`}
			>
				<p>{description}</p>
			</div>
		</div>
	);
};
export default function Faq() {
	const [openFaq, setOpenFaq] = useState(null);
	const openFaqHandler = (index) => {
		setOpenFaq(index);
	};

	const { questionsList } = useContext(QUESTIONS_CONTEXT);
	return (
		<section className={styles.faqwrapper}>
			<div className="container">
				<h4 className="sub-title" data-aos="fade-up">
					have a question
				</h4>
				<h2 className="sec-title" data-aos="fade-up" data-aos-delay={100}>
					FAQs
				</h2>
				<div className={styles.faqlist}>
					{questionsList?.length > 0 &&
						questionsList?.map((item, index) =>
							FaqItem(item, openFaq, openFaqHandler, index)
						)}

					{!questionsList?.length && <span>No questions for now.</span>}
				</div>
			</div>
		</section>
	);
}
