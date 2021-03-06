import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	topRated: [],
	recentlyPlayed: [],
	likedSongs: [],
	searchTerm: "",
	searchResults: [],
	playing: false,
	isSearching: false,
	currentSong: null,
	token: null,
	activeTab: 0,
	modal: { message: "", visible: false },
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
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
			const { song, index } = action.payload;
			const image = song?.album.images[2]?.url;
			const title = song?.name;
			const artist = song?.artists.reduce(
				(name, artist) => `${name && name + ","} ${artist.name}`,
				""
			);
			const url = song?.preview_url;
			state.currentSong = {
				index,
				title,
				artist,
				url,
				image,
				ref: new Audio(url),
			};
		},
		setPlaying: (state, action) => {
			state.playing = action.payload;
		},
		setModal: (state, action) => {
			state.modal = action.payload;
		},
		setLikedSongs: (state, action) => {
			state.likedSongs = action.payload;
		},
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
		setSearchResults: (state, action) => {
			state.searchResults = action.payload;
		},
		setIsSearching: (state, action) => {
			state.isSearching = action.payload;
		},
		setActiveTab: (state, action) => {
			state.activeTab = action.payload;
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
	setModal,
	setLikedSongs,
	setSearchResults,
	setSearchTerm,
	setIsSearching,
	setActiveTab,
} = userSlice.actions;

export default userSlice.reducer;
