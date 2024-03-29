import React from "react";
import SIdebarOption from "../sidebarOption/SIdebarOption";
import { AiFillHome, AiFillHeart, AiFillInfoCircle } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<nav className="sidebar">
			<Link to="/">
				<SIdebarOption title="Home" Icon={AiFillHome} index={0} />
			</Link>
			<Link to="/lyrics">
				<SIdebarOption title="Lyrics" Icon={BsMusicNoteList} index={1} />
			</Link>
			<Link to="/likedsongs">
				<SIdebarOption title="Liked Songs" Icon={AiFillHeart} index={2} />
			</Link>
			<Link to="/about">
				<SIdebarOption title="About" Icon={AiFillInfoCircle} index={3} />
			</Link>
		</nav>
	);
};

export default Sidebar;
