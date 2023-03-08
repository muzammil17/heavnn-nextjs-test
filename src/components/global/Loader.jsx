import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = ({ color = "#4B64D9", size = 80 }) => {
	return (
		<div
			className="loader"
			style={{
				alignItems: "center",
				justifyContent: "center",
				display: "flex",
			}}
		>
			<PuffLoader size={size} color={color} />
		</div>
	);
};

export default Loader;
