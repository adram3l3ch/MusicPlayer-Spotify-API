import React from "react";
import SectionCard from "../sectionCard/SectionCard";
import "./homeSection.css";

const HomeSection = ({ title }) => {
	return (
		<div className="homeSection">
			<h2>{title}</h2>
			<div className="homeSection__cards">
				<SectionCard />
				<SectionCard />
				<SectionCard />
				<SectionCard />
				<SectionCard />
				<SectionCard />
				<SectionCard />
				<SectionCard />
				<SectionCard />
			</div>
		</div>
	);
};

export default HomeSection;
