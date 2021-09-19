import React from "react";
import "./login.css";
import { loginURL } from "../../spotify";

const Login = () => {
	return (
		<main className="login">
			<h1>WELCOME</h1>
			<a href={loginURL}>
				<button>Login with Spotify</button>
			</a>
		</main>
	);
};

export default Login;
