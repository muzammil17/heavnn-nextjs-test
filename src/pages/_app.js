import { useEffect } from "react";
import AOS from "aos";
import "antd/dist/reset.css";
import "@/styles/globals.css";
import "animate.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "@/sharedlayout/index";
import Context from "@/Context";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init();
		history.scrollRestoration = "manual";
	}, []);

	return (
		<Context>
			<Layout>
				<Component {...pageProps} />
				<ToastContainer
					position="top-right"
					style={{ zIndex: 9999999999 }}
					autoClose={3000}
					hideProgressBar={false}
					closeOnClick={true}
					pauseOnHover={true}
					draggable={false}
				/>
			</Layout>
		</Context>
	);
}
