import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { HOME_ROUTE, BLOG_ROUTE, PLACES_ROUTE, PLACE_ROUTE } from "@/constants";
import Images from "@/themes/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { SERVICE_CONTEXT } from "@/Context";

export default function Header() {
	const { services } = useContext(SERVICE_CONTEXT);
	const router = useRouter();
	const [navOpen, setnavOpen] = useState(false);
	const [isSticky, setSticky] = useState(false);
	const [isDropdown, setDropdown] = useState(false);
	const navOpenToggle = () => {
		setnavOpen(!navOpen);
	};
	const navCloseToggle = () => {
		setnavOpen(false);
	};
	const toggleVisible = () => {
		const scrolled = window.scrollY;
		if (scrolled > 50) {
			setSticky(true);
		} else if (scrolled <= 300) {
			setSticky(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
	}, []);
	const isFindRoute =
		router.pathname.includes(PLACE_ROUTE) ||
		router.pathname.includes(PLACES_ROUTE);
	return (
		<header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
			<div className="container">
				<div className={styles.content}>
					<Link href={HOME_ROUTE} className={styles.thumb}>
						<Image
							className={styles.logo}
							src={Images.Logo}
							alt="Pushpoo"
							fill
							sizes="100%,100%"
						/>
					</Link>
					<div className={`${styles.navlist} ${navOpen ? styles.active : ""}`}>
						<div className={styles.navitem}>
							<div
								className={`${styles.navlink} ${
									isFindRoute ? styles.active : ""
								}`}
							>
								<span
									onClick={() => {
										setDropdown(!isDropdown);
									}}
								>
									Find Pet Care
									<FontAwesomeIcon icon={faChevronDown} />
								</span>
								<ul
									className={`${styles.dropdown} ${
										isDropdown ? styles.active : ""
									}`}
								>
									{services?.length > 0 &&
										services.map((service) => (
											<li
												className={styles.dropdownitem}
												onClick={navCloseToggle}
												key={service?.slug}
											>
												<Link href={PLACES_ROUTE + service?.slug}>
													{service?.title}
												</Link>
											</li>
										))}
								</ul>
							</div>
						</div>
						<li className={styles.navitem} onClick={navCloseToggle}>
							<Link className={styles.navlink} href={HOME_ROUTE + "#business"}>
								For Business Owners
							</Link>
						</li>
						<li className={styles.navitem} onClick={navCloseToggle}>
							<Link
								className={`${styles.navlink} ${
									router.pathname.includes(BLOG_ROUTE) ? styles.active : ""
								}`}
								href={BLOG_ROUTE}
							>
								Blog
							</Link>
						</li>
					</div>
					<button
						className={`${styles.togglebtn} ${navOpen ? styles.active : ""}`}
						onClick={navOpenToggle}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>
		</header>
	);
}
