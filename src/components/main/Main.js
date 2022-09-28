import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeQueue from "../homeQueue/HomeQueue";
import HomeSection from "../homeSection/HomeSection";
import Modal from "../modal/Modal";
import Searchbar from "../searchbar/Searchbar";
import User from "../user/User";
import { Switch, Route } from "react-router-dom";
import LikedSongs from "../../pages/likedSongs/LikedSongs";
import SearchResultPage from "../../pages/searchResultPage/SearchResultPage";
import Info from "../../pages/info/Info";
import { setNewReleases } from "../../features/userSlice";

const Main = ({ spotify }) => {
	const dispatch = useDispatch();
	const { topRated, recentlyPlayed, currentSong, newReleases } = useSelector(state => state.user);
	// console.log(newReleases);
	useEffect(() => {
		spotify.getFeaturedPlaylists().then(resp => {
			let playlists = resp.playlists.items;
			playlists.map(async playlist => {
				const tracks = await spotify.getPlaylistTracks(playlist.id);
				dispatch(
					setNewReleases({
						name: playlist.name,
						tracks: tracks.items.map(item => ({ ...item.track, track: null })),
					})
				);
			});
		});
	}, [spotify, dispatch]);
	return (
		<main className="main">
			<Modal />
			<header className="main__top">
				<Searchbar spotify={spotify} />
				<User />
			</header>
			<section className="main__bottom">
				<Switch>
					<Route exact path="/">
						{topRated[currentSong?.index + 3] && <HomeQueue />}
						<HomeSection title="MADE FOR YOU" lists={topRated} />
						<HomeSection title="RECENTLY PLAYED" lists={recentlyPlayed} sm />
						{newReleases.map(tracks => (
							<HomeSection title={tracks.name} lists={tracks.tracks} sm key={tracks.name} />
						))}
					</Route>
					<Route path="/likedsongs">
						<LikedSongs />
					</Route>
					<Route path="/search">
						<SearchResultPage />
					</Route>
					<Route path="/about">
						<Info />
					</Route>
				</Switch>
			</section>
		</main>
	);
};

export default Main;
