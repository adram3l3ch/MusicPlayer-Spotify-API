import React from "react";
import "./login.css";
import { loginURL } from "../../spotify";

const Login = () => {
	return (
		<div className="login">
			<h1>WELCOME</h1>
			<a href={loginURL}>
				<button>Login with Spotify</button>
			</a>
		</div>
	);
};

export default Login;
