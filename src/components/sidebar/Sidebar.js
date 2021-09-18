import React from "react";
import SIdebarOption from "../sidebarOption/SIdebarOption";
import { AiFillHome, AiFillHeart, AiFillInfoCircle } from "react-icons/ai";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Link to="/">
				<SIdebarOption title="Home" Icon={AiFillHome} index={0} />
			</Link>
			<Link to="/likedsongs">
				<SIdebarOption
					title="Liked Songs"
					Icon={AiFillHeart}
					index={1}
				/>
			</Link>
			<Link to="/about">
				<SIdebarOption
					title="About"
					Icon={AiFillInfoCircle}
					index={2}
				/>
			</Link>
		</div>
	);
};

export default Sidebar;
