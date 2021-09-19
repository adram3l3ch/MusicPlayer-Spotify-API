import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, setPlaying } from "../../features/userSlice";
import "./playerStatus.css";

let interval;
const PlayerStatus = () => {
	const { playing, currentSong, topRated } = useSelector(
		(state) => state.user
	);
	const dispatch = useDispatch();
	const [time, setTime] = useState(0);
	const updateTime = () => {
		setTime((time) => currentSong.ref.currentTime);
	};

	useEffect(() => {
		if (!playing) {
			clearInterval(interval);
		} else {
			interval = setInterval(updateTime, 100);
		}
	}, [playing]);

	useEffect(() => {
		if (parseInt(time) === parseInt(currentSong?.ref.duration)) {
			setTime(0);
			dispatch(setPlaying(false));
			const song = topRated[currentSong.index + 1];
			console.log(song);
			dispatch(setCurrentSong({ song, index: currentSong.index + 1 }));
		}
		// eslint-disable-next-line
	}, [time, dispatch]);

	return (
		<div className="playerStatus">
			<p className="playerStatus__current">
				00:
				{time < 10 ? `0${parseInt(time)}` : parseInt(time)}
			</p>
			<div className="bar" style={{ "--percent": `${time}%` }}></div>
			<p className="playerStatus__duration">00:30</p>
		</div>
	);
};

export default PlayerStatus;
