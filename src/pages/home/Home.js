import React from "react";
import Main from "../../components/main/Main";
import Player from "../../components/player/Player";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<Main />
			<Player />
		</div>
	);
};

export default Home;
