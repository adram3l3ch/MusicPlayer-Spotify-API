import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, setPlaying } from "../../features/userSlice";

let interval;
const PlayerStatus = () => {
	const { playing, currentSong, currentPlaylist } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const [time, setTime] = useState(0);
	const updateTime = () => {
		setTime(time => currentSong.ref.currentTime);
	};

	useEffect(() => {
		if (!playing) {
			clearInterval(interval);
		} else {
			interval = setInterval(updateTime, 1);
		}
		// eslint-disable-next-line
	}, [playing]);

	useEffect(() => {
		if (parseInt(time) === parseInt(currentSong?.ref.duration)) {
			dispatch(setPlaying(false));
			let song = currentPlaylist[currentSong.index + 1];
			song = song?.track || song;
			dispatch(setCurrentSong({ song, index: currentSong.index + 1 }));
		}
		// eslint-disable-next-line
	}, [time, dispatch]);

	useEffect(() => setTime(0), [currentSong]);

	return (
		<div className="playerStatus">
			<p className="playerStatus__current">
				00:
				{time < 10 ? `0${parseInt(time)}` : parseInt(time)}
			</p>
			<div
				className="bar"
				style={{ "--percent": `${time * (100 / (currentSong?.ref.duration || 30))}%` }}
			></div>
			<p className="playerStatus__duration">00:30</p>
		</div>
	);
};

export default PlayerStatus;
