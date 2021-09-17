import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: null,
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
			state.token += action.payload;
		},
	},
});

export const { setUser, setPlaylists, setToken } = userSlice.actions;

export default userSlice.reducer;
