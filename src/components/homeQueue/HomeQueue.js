import React from "react";
import "./homeQueue.css";
import { BiSkipNext } from "react-icons/bi";

const HomeQueue = () => {
	return (
		<div className="homeQueue">
			<h2>ON THE QUEUE</h2>
			<div className="homeQueue__grid">
				<div className="homeQueue__grid__next">
					<div className="details">
						<p>
							Next <BiSkipNext />
						</p>
						<h3>KIDS</h3>
						<h4>ONE REPUBLIC</h4>
					</div>
					<img
						src="https://cms-cdn.with.in/content/CYI63vg/images/20180504104826-OneRepubKids_1024x539_Main-1024x539-827506.jpg"
						alt=""
					/>
				</div>

				<img
					src="https://i.ytimg.com/vi/KkY3Hs31PLo/maxresdefault.jpg"
					alt=""
				/>
				<img
					src="https://www.lahiguera.net/musicalia/artistas/broods/disco/7626/tema/13363/broods_heartlines-portada.jpg"
					alt=""
				/>
			</div>
		</div>
	);
};

export default HomeQueue;
