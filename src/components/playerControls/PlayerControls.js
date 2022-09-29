import React, { useEffect } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentSong, setPlaying } from "../../features/userSlice";

const PlayerControls = () => {
	const dispatch = useDispatch();
	const { playing, currentSong, currentPlaylist } = useSelector(state => state.user);

	const play = () => {
		if (!/null/.test(currentSong?.ref?.src)) dispatch(setPlaying(!playing));
	};

	const nextOrPrev = value => {
		dispatch(setPlaying(false));
		let song = currentPlaylist[currentSong.index + value];
		song = song?.track || song;
		const index = currentSong.index + value;
		if (song) dispatch(setCurrentSong({ song, index }));
	};

	useEffect(() => {
		const play = () => dispatch(setPlaying(true));
		const pause = () => dispatch(setPlaying(false));
		currentSong?.ref.addEventListener("play", play);
		currentSong?.ref.addEventListener("pause", pause);

		return () => {
			currentSong?.ref.removeEventListener("play", play);
			currentSong?.ref.removeEventListener("pause", pause);
		};
	}, [currentSong, dispatch]);

	return (
		<div className="playerControls">
			<BiSkipPrevious onClick={() => nextOrPrev(-1)} />
			{playing ? <AiFillPauseCircle onClick={play} /> : <AiFillPlayCircle onClick={play} />}

			<BiSkipNext onClick={() => nextOrPrev(1)} />
		</div>
	);
};

export default PlayerControls;
