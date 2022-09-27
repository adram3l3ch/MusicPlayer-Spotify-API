import React from "react";
import PlayerControls from "../playerControls/PlayerControls";
import PlayerStatus from "../playerStatus/PlayerStatus";
import { useSelector } from "react-redux";

const Player = () => {
	const { currentSong } = useSelector(state => state.user);
	return (
		<footer className={currentSong ? "player" : "player hidden"}>
			<div className="player__left">
				<img src={currentSong?.image} alt="" draggable="false" />
				<div className="player__left__songInfo">
					<h4 className="player__left__title">{currentSong?.title || "Title"}</h4>
					<p className="player__left__artist">{currentSong?.artist || "Artist"}</p>
				</div>
			</div>
			<div className="player__center">
				<PlayerControls />
			</div>
			<div className="player__right">
				<PlayerStatus />
			</div>
		</footer>
	);
};

export default Player;
