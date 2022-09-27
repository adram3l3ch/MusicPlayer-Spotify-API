import React from "react";
import SectionCard from "../sectionCard/SectionCard";

const HomeSection = ({ title, lists, sm }) => {
	return (
		<div className="homeSection">
			<h2>{title}</h2>
			<div className="homeSection__cards">
				{lists?.map((song, index) => (
					<SectionCard song={song.track || song} index={index} key={index} sm={sm} />
				))}
			</div>
		</div>
	);
};

export default HomeSection;
