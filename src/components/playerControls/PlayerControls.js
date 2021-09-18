import React, { useEffect } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentSong, setPlaying } from "../../features/userSlice";
import "./playerControls.css";

const PlayerControls = () => {
	const dispatch = useDispatch();
	const { playing, currentSong, topRated } = useSelector(
		(state) => state.user
	);

	const play = () => {
		if (currentSong?.ref?.src !== "http://localhost:3000/null")
			if (playing) {
				currentSong.ref.pause();
				dispatch(setPlaying(false));
			} else {
				currentSong.ref.play();
				dispatch(setPlaying(true));
			}
	};

	const nextOrPrev = (value) => {
		if (currentSong) {
			if (playing) currentSong?.ref?.pause();
			const nextSong = topRated[currentSong.index + value];
			if (nextSong) {
				dispatch(
					setCurrentSong({
						index: currentSong.index + value,
						title: nextSong.name,
						artist: nextSong.artists[0].name,
						url: nextSong.preview_url,
						image: nextSong.album.images[0].url,
						ref: new Audio(nextSong.preview_url),
					})
				);
			}
		}
	};

	return (
		<div className="playerControls">
			<BiSkipPrevious onClick={() => nextOrPrev(-1)} />
			{playing ? (
				<AiFillPauseCircle onClick={play} />
			) : (
				<AiFillPlayCircle onClick={play} />
			)}

			<BiSkipNext onClick={() => nextOrPrev(1)} />
		</div>
	);
};

export default PlayerControls;
