import React from "react";
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
		</div>
	);
};

export default Main;
