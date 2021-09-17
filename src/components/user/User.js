import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./user.css";

const User = () => {
	const userName = useSelector((state) => state.user.user?.display_name);
	return (
		<div className="user">
			<FaUserCircle />
			<div className="user__info">
				<p>WELCOME</p>
				<h3>{userName || "User"}</h3>
			</div>
		</div>
	);
};

export default User;
