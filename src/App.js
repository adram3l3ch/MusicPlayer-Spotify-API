import React from "react";
import Player from "./components/player/Player";
import Sidebar from "./components/sidebar/Sidebar";
import "./scss/app.css";

function App() {
	return (
		<div className="app">
			<Sidebar />
			<Player />
		</div>
	);
}

export default App;
