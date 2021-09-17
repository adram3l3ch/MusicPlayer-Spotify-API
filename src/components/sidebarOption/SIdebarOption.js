import React from "react";
import "./sidebarOption.css";

const SIdebarOption = ({ Icon, title, active }) => {
	return (
		<div className={`sidebarOption ${active && "active"}`}>
			<Icon />
			<h3 className="sidebarOption__title">{title}</h3>
		</div>
	);
};

export default SIdebarOption;
