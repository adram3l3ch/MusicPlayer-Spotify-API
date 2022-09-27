import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentSong, setPlaying } from "../../features/userSlice";

const SearchResult = ({ song }) => {
	const { playing, currentSong } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const index = Math.floor(Math.random() * 20);
	const play = () => {
		if (playing) currentSong?.ref?.pause();
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
