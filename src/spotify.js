const endpoint = "https://accounts.spotify.com/authorize";
const redirectURI =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000/"
		: "https://adra-zene.netlify.app/";
const clientID = "070587934141491eba9e3c76e9d4c15c";

const scopes = [
	"streaming",
	"user-library-read",
	"user-read-email",
	"user-read-private",
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const loginURL = `${endpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

export const getToken = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((acc, value) => {
			let parts = value.split("=");
			acc[parts[0]] = decodeURIComponent(parts[1]);
			return acc;
		}, {});
};
