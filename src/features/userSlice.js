import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	topRated: [],
	recentlyPlayed: [],
	playlists: [],
	playing: false,
	currentSong: null,
	token: null,
	time: {},
	modal: { message: "", visible: false },
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setPlaylists: (state, action) => {
			state.playlists = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setTopRated: (state, action) => {
			state.topRated = action.payload;
		},
		setRecentlyPlayed: (state, action) => {
			state.recentlyPlayed = action.payload;
		},
		setCurrentSong: (state, action) => {
			state.currentSong = action.payload;
		},
		setPlaying: (state, action) => {
			state.playing = action.payload;
		},
		setTime: (state, action) => {
			state.time = action.payload;
		},
		setModal: (state, action) => {
			state.modal = action.payload;
		},
	},
});

export const {
	setUser,
	setPlaylists,
	setToken,
	setTopRated,
	setRecentlyPlayed,
	setCurrentSong,
	setPlaying,
	setTime,
	setModal,
} = userSlice.actions;

export default userSlice.reducer;
