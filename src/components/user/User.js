import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./user.css";

const User = () => {
	return (
		<div className="user">
			<FaUserCircle />
			<div className="user__info">
				<p>WELCOME</p>
				<h3>John Doe</h3>
			</div>
		</div>
	);
};

export default User;
