import React from "react";
import HomeQueue from "../homeQueue/HomeQueue";
import HomeSection from "../homeSection/HomeSection";
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
			<div className="main__bottom">
				<HomeQueue />
				<HomeSection title="MADE FOR YOU" />
				<HomeSection title="RECENT" />
				<HomeSection title="MADE FOR YOU" />
				<HomeSection title="MADE FOR YOU" />
			</div>
		</div>
	);
};

export default Main;
