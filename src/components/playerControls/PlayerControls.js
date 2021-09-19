import React from "react";
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
		if (!/null/.test(currentSong?.ref?.src))
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
			dispatch(setPlaying(false));
			const song = topRated[currentSong.index + value];
			const index = currentSong.index + value;
			if (song) {
				dispatch(setCurrentSong({ song, index }));
			}
		}
	};

	currentSong?.ref.addEventListener("play", () => dispatch(setPlaying(true)));
	currentSong?.ref.addEventListener("pause", () =>
		dispatch(setPlaying(false))
	);

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
