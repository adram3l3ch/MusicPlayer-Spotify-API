import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AiFillPlayCircle } from "react-icons/ai";
import { setCurrentPlaylist, setCurrentSong, setPlaying } from "../../features/userSlice";

const SectionCard = ({ song, songs, index, sm }) => {
	const dispatch = useDispatch();
	const { currentSong, playing } = useSelector(state => state.user);
	const image = song.album ? song.album.images[0]?.url : song.images[0]?.url;
	const title = song.name;
	const artist = song.artists.reduce((name, artist) => `${name && name + ","} ${artist.name}`, "");

	const style = {
		"--width": sm ? "200px" : "250px",
	};

	const updateSong = () => {
		if (playing) currentSong?.ref?.pause();
		dispatch(setPlaying(false));
		dispatch(setCurrentPlaylist(songs));
		dispatch(setCurrentSong({ song, index }));
	};

	return (
		<div className="sectionCard" onClick={updateSong} style={style}>
			<div className="overlay">
				<AiFillPlayCircle />
			</div>
			<img src={image} alt="" />
			<h3>{title}</h3>
			<h4>{artist}</h4>
		</div>
	);
};

export default SectionCard;
