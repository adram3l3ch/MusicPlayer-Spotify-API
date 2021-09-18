import React from "react";
import "./searchResult.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../../features/userSlice";

const SearchResult = ({ song }) => {
	const { playing, currentSong } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const index = Math.floor(Math.random() * 20);
	const title = song.name;
	const artist = song.album.artists[0].name;
	const image = song.album.images[0].url;
	const play = () => {
		if (playing) currentSong?.ref?.pause();
		dispatch(
			setCurrentSong({
				index,
				title,
				artist,
				url: song.preview_url,
				image,
				ref: new Audio(song.preview_url),
			})
		);
	};
	return (
		<div className="searchResult" onClick={play}>
			<img src={song.album.images[0].url} alt="" />
			<div className="searchResult__details">
				<h3>{song.name}</h3>
				<p>{song.album.name}</p>
			</div>
			<AiFillPlayCircle />
		</div>
	);
};

export default SearchResult;
