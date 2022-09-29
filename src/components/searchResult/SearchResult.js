import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentSong, setPlaying } from "../../features/userSlice";

const SearchResult = ({ song }) => {
	const dispatch = useDispatch();
	const index = Math.floor(Math.random() * 20);
	const play = () => {
		dispatch(setPlaying(false));
		dispatch(setCurrentSong({ song, index }));
	};
	return (
		<div className="searchResult" onClick={play}>
			<img src={song.album.images[2].url} alt="" />
			<div className="searchResult__details">
				<h3>{song.name}</h3>
				<p>{song.album.name}</p>
			</div>
			<AiFillPlayCircle />
		</div>
	);
};

export default SearchResult;
