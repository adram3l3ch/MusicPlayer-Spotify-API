import React from "react";
import { useSelector } from "react-redux";
import HomeSection from "../../components/homeSection/HomeSection";

const LikedSongs = () => {
	const { likedSongs } = useSelector(state => state.user);
	return (
		<div className="likedSongs">
			<HomeSection title="LIKED SONGS" lists={likedSongs} />
		</div>
	);
};

export default LikedSongs;
