import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import "./playerControls.css";

const PlayerControls = () => {
	return (
		<div className="playerControls">
			<BiSkipPrevious />
			<AiFillPlayCircle />
			<BiSkipNext />
		</div>
	);
};

export default PlayerControls;
