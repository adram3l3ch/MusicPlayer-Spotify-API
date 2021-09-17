import React from "react";
import { BiSearch } from "react-icons/bi";
import "./searchbar.css";

const Searchbar = () => {
	return (
		<div className="searchbar">
			<BiSearch />
			<input type="text" placeholder="Search" />
		</div>
	);
};

export default Searchbar;
