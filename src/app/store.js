import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ["user/setCurrentSong"],
				// Ignore these field paths in all actions
				ignoredActionPaths: ["meta.arg", "payload.timestamp"],
				// Ignore these paths in the state
				ignoredPaths: ["user.currentSong.ref"],
			},
		}),
});
