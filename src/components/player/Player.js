import React from "react";
import { BiChevronUp } from "react-icons/bi";
import PlayerControls from "../playerControls/PlayerControls";
import PlayerStatus from "../playerStatus/PlayerStatus";
import "./player.css";

const Player = () => {
	return (
		<div className="player">
			<div className="player__left">
				<BiChevronUp />
				<img
					src="https://virginradio.ro/wp-content/uploads/2017/02/Linkin-Park-Heavy-2017.jpg"
					alt=""
					draggable="false"
				/>
				<div className="player__left__songInfo">
					<h4 className="player__left__title">Heavy </h4>
					<p className="player__left__artist">Linkin Park</p>
				</div>
			</div>
			<div className="player__center">
				<PlayerControls />
			</div>
			<div className="player__right">
				<PlayerStatus />
			</div>
		</div>
	);
};

export default Player;
