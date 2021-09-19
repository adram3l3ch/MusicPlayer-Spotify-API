import React from "react";
import { useSelector } from "react-redux";
import SearchResult from "../../components/searchResult/SearchResult";
import "./searchResultPage.css";

const SearchResultPage = () => {
	const { searchResults } = useSelector(state => state.user);
	return (
		<div className="searchResultPage">
			{searchResults.map(song => (
				<SearchResult song={song} />
			))}
			{searchResults.length > 0 || <h2>Search for any song</h2>}
		</div>
	);
};

export default SearchResultPage;
