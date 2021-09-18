import React from "react";
import { useSelector } from "react-redux";
import HomeQueue from "../homeQueue/HomeQueue";
import HomeSection from "../homeSection/HomeSection";
import Searchbar from "../searchbar/Searchbar";
import User from "../user/User";
import "./main.css";

const Main = () => {
	const { topRated, recentlyPlayed, currentSong } = useSelector(
		(state) => state.user
	);
	return (
		<div className="main">
			<div className="main__top">
				<Searchbar />
				<User />
			</div>
			<div className="main__bottom">
				{topRated[currentSong?.index + 3] && <HomeQueue />}
				<HomeSection title="MADE FOR YOU" lists={topRated} />
				<HomeSection title="RECENTLY PLAYED" lists={recentlyPlayed} />
			</div>
		</div>
	);
};

export default Main;
