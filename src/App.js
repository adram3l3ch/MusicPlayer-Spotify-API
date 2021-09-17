import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import "./scss/app.css";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "./features/userSlice";

const spotify = new SpotifyWebApi();

function App() {
	const { token } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		const hash = getToken();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			dispatch(setToken(_token));
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => dispatch(setUser(user)));
			spotify
				.getMyRecentlyPlayedTracks()
				.then((user) => console.log(user));
		}
	}, []);

	return <div className="app">{token ? <Home /> : <Login />}</div>;
}

export default App;
