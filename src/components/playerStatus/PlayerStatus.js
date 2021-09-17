import React from "react";
import "./playerStatus.css";

const PlayerStatus = () => {
	return (
		<div className="playerStatus">
			<p className="playerStatus__current">02:00</p>
			<div className="bar"></div>
			<p className="playerStatus__duration">04:00</p>
		</div>
	);
};

export default PlayerStatus;
