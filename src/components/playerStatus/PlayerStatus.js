import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlaying } from "../../features/userSlice";
import "./playerStatus.css";

let interval;
// let a = 5;
const PlayerStatus = () => {
	const { playing, currentSong } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [time, setTime] = useState(0);
	const updateTime = () => {
		setTime((time) => time + 1);
	};

	useEffect(() => {
		if (!playing) {
			clearInterval(interval);
		} else {
			interval = setInterval(updateTime, 1000);
		}
	}, [playing]);

	useEffect(() => {
		if (time === 30) {
			setTime(0);
			dispatch(setPlaying(false));
		}
	}, [time]);

	useEffect(() => {
		setTime(0);
	}, [currentSong]);

	return (
		<div className="playerStatus">
			<p className="playerStatus__current">
				00:
				{time < 10 ? `0${time}` : time}
			</p>
			<div
				className="bar"
				style={{
					background: `linear-gradient(
			to right,
			var(--accent) ${time * (100 / 30)}%,
			rgba(254, 102, 58,0.2) ${time * (100 / 30)}%
		)`,
				}}
			></div>
			<p className="playerStatus__duration">00:30</p>
		</div>
	);
};

export default PlayerStatus;
