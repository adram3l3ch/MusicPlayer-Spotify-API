import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { setIsSearching, setSearchResults, setSearchTerm } from "../../features/userSlice";

let timeout;
const Searchbar = ({ spotify }) => {
	const dispatch = useDispatch();
	const { searchTerm } = useSelector(state => state.user);

	useEffect(() => {
		clearTimeout(timeout);
		const setResults = () => {
			spotify.searchTracks(searchTerm).then(resp => {
				dispatch(setSearchResults(resp.tracks.items));
			});
		};
		timeout = setTimeout(setResults, 1000);
	}, [searchTerm, dispatch, spotify]);

	return (
		<div className="searchbar">
			<BiSearch />
			<input
				type="text"
				placeholder="Search"
				value={searchTerm}
				onFocus={() => {
					dispatch(setIsSearching(true));
				}}
				onChange={e => {
					dispatch(setSearchTerm(e.target.value));
				}}
			/>
			{searchTerm && (
				<ImCancelCircle
					onClick={() => {
						dispatch(setSearchTerm(""));
						dispatch(setSearchResults([]));
					}}
				/>
			)}
		</div>
	);
};

export default Searchbar;
