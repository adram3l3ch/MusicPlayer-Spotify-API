import React from "react";
import "./info.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Info = () => {
	return (
		<div className="info">
			<div className="info__card">
				<img src="https://i.ibb.co/4f1SVBp/15.jpg" alt="" />
				<p>Developed and designed by</p>
				<h3>ADARSH</h3>
				<div className="links">
					<a
						href="https://linkedin.com/in/adram3l3ch"
						target="_blank"
					>
						<AiFillLinkedin />
					</a>
					<a href="https://github.com/adram3l3ch" target="_blank">
						<AiFillGithub />
					</a>
					<a href="mailto:adramelech.psd@gmail.com" target="_blank">
						<SiGmail />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Info;
