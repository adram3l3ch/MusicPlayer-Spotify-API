import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./scss/app.css";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
	setUser,
	setToken,
	setTopRated,
	setRecentlyPlayed,
	setLikedSongs,
	setModal,
	setPlaying,
} from "./features/userSlice";

const spotify = new SpotifyWebApi();

function App() {
	const { token, currentSong } = useSelector(state => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		const hash = getToken();
		window.location.hash = "";
		const _token = hash.access_token;
		window.localStorage.setItem("token", _token);
		if (_token) {
			dispatch(setToken(_token));
			spotify.setAccessToken(_token);
			spotify.getMe().then(user => dispatch(setUser(user)));
			spotify.getMyTopTracks().then(resp => dispatch(setTopRated(resp.items)));
			spotify.getMyRecentlyPlayedTracks().then(resp => {
				dispatch(setRecentlyPlayed(resp.items));
			});
			spotify.getMySavedTracks().then(resp => {
				dispatch(setLikedSongs(resp.items));
			});
		}
	}, [dispatch]);

	useEffect(() => {
		if (/null/.test(currentSong?.ref?.src)) {
			dispatch(
				setModal({
					message: "Oops!! Spotify didn't provided the URL for this song",
					visible: true,
				})
			);
			setTimeout(() => dispatch(setModal({ message: "", visible: false })), 5000);
			dispatch(setPlaying(false));
		} else if (currentSong?.ref?.src) {
			dispatch(setPlaying(true));
		}
	}, [currentSong, dispatch]);

	return <div className="app">{token ? <Home spotify={spotify} /> : <Login />}</div>;
}

export default App;
