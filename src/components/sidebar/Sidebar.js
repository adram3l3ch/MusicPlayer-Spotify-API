import React from "react";
import SIdebarOption from "../sidebarOption/SIdebarOption";
import { AiFillHome, AiFillHeart, AiFillInfoCircle } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import "./sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<SIdebarOption title="Home" Icon={AiFillHome} active />
			<SIdebarOption title="Plalists" Icon={RiPlayListFill} />
			<SIdebarOption title="Liked Songs" Icon={AiFillHeart} />
			<SIdebarOption title="About" Icon={AiFillInfoCircle} />
		</div>
	);
};

export default Sidebar;
