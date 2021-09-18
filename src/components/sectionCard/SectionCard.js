import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentSong, setPlaying } from "../../features/userSlice";
import "./sectionCard.css";

const SectionCard = ({ song, index }) => {
	const dispatch = useDispatch();
	const { currentSong, playing } = useSelector((state) => state.user);
	const image = song.album ? song.album.images[0]?.url : song.images[0]?.url;
	const title = song.name;
	const artist = song.artists.reduce(
		(name, artist) => `${name && name + ","} ${artist.name}`,
		""
	);
	useEffect(() => {
		if (currentSong?.ref?.src !== "http://localhost:3000/null") {
			currentSong?.ref?.play();
			dispatch(setPlaying(true));
		} else {
			dispatch(setPlaying(false));
		}
	}, [currentSong]);

	const updateSong = () => {
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
		<div className="sectionCard" onClick={updateSong}>
			<img src={image} alt="" />
			<h3>{title}</h3>
			<h4>{artist}</h4>
		</div>
	);
};

export default SectionCard;
