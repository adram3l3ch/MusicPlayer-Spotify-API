import React from "react";
import HomeQueue from "../homeQueue/HomeQueue";
import Searchbar from "../searchbar/Searchbar";
import User from "../user/User";
import "./main.css";

const Main = () => {
	return (
		<div className="main">
			<div className="main__top">
				<Searchbar />
				<User />
			</div>
			<div className="mian__bottom">
				<HomeQueue />
			</div>
		</div>
	);
};

export default Main;
