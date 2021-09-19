import React from "react";
import "./homeQueue.css";
import { BiSkipNext } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setPlaying } from "../../features/userSlice";

const HomeQueue = () => {
	const { currentSong, topRated } = useSelector((state) => state.user);
	const next = topRated[currentSong?.index + 1];
	const third = topRated[currentSong?.index + 2];
	const fourth = topRated[currentSong?.index + 3];
	const dispatch = useDispatch();

	const play = (song, index) => {
		currentSong?.ref?.pause();
		dispatch(setPlaying(false));
		dispatch(setCurrentSong({ song, index }));
	};
	return (
		<div className="homeQueue">
			<h2>ON THE QUEUE</h2>
			<div className="homeQueue__grid">
				<div
					className="homeQueue__grid__next"
					onClick={() => play(next, currentSong?.index + 1)}
				>
					<div className="details">
						<p>
							Next <BiSkipNext />
						</p>
						<h3>{next?.name?.toUpperCase()}</h3>
						<h4>{next?.artists[0]?.name.toUpperCase()}</h4>
					</div>
					<img src={next?.album?.images[0].url} alt="" />
				</div>

				<img
					src={third?.album?.images[0].url}
					alt=""
					onClick={() => play(third, currentSong?.index + 2)}
				/>
				<img
					src={fourth?.album?.images[0].url}
					alt=""
					onClick={() => play(fourth, currentSong?.index + 3)}
				/>
			</div>
		</div>
	);
};

export default HomeQueue;
