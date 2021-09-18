import React from "react";
import Main from "../../components/main/Main";
import Player from "../../components/player/Player";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className="home">
			<Router>
				<Sidebar />
				<Player />
				<Main />
			</Router>
		</div>
	);
};

export default Home;
