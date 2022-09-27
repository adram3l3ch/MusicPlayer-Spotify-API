import React from "react";
import { useSelector } from "react-redux";
import HomeQueue from "../homeQueue/HomeQueue";
import HomeSection from "../homeSection/HomeSection";
import Modal from "../modal/Modal";
import Searchbar from "../searchbar/Searchbar";
import User from "../user/User";
import { Switch, Route } from "react-router-dom";
import LikedSongs from "../../pages/likedSongs/LikedSongs";
import SearchResultPage from "../../pages/searchResultPage/SearchResultPage";
import Info from "../../pages/info/Info";

const Main = ({ spotify }) => {
	const { topRated, recentlyPlayed, currentSong, isSearching } = useSelector(state => state.user);
	return (
		<main className="main">
			<Modal />
			<header className="main__top">
				<Searchbar spotify={spotify} />
				<User />
			</header>
			{isSearching ? (
				<SearchResultPage />
			) : (
				<section className="main__bottom">
					<Switch>
						<Route exact path="/">
							{topRated[currentSong?.index + 3] && <HomeQueue />}
							<HomeSection title="MADE FOR YOU" lists={topRated} />
							<HomeSection title="RECENTLY PLAYED" lists={recentlyPlayed} />
						</Route>
						<Route path="/likedsongs">
							<LikedSongs />
						</Route>
						<Route path="/about">
							<Info />
						</Route>
					</Switch>
				</section>
			)}
		</main>
	);
};

export default Main;
