import React from "react";
import SIdebarOption from "../sidebarOption/SIdebarOption";
import { AiFillHome, AiFillHeart, AiFillInfoCircle } from "react-icons/ai";
import { RiPlayListFill } from "react-icons/ri";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Link to="/">
				<SIdebarOption title="Home" Icon={AiFillHome} active />
			</Link>
			<Link to="/likedsongs">
				<SIdebarOption title="Liked Songs" Icon={AiFillHeart} />
			</Link>
			<SIdebarOption title="Plalists" Icon={RiPlayListFill} />
			<SIdebarOption title="About" Icon={AiFillInfoCircle} />
		</div>
	);
};

export default Sidebar;
