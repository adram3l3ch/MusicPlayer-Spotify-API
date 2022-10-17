import React from "react";
import { useSelector } from "react-redux";

const Lyrics = () => {
	const {
		lyrics: { loading, data },
	} = useSelector(state => state.user);
	return (
		<div className="lyrics">
			{loading ? (
				<p>Loading...</p>
			) : data ? (
				data.split("\n").map(line => <p>{line}</p>)
			) : (
				<p>Please play a song...</p>
			)}
		</div>
	);
};

export default Lyrics;
