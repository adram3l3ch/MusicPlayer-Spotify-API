import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActiveTab, setSearchResults, setSearchTerm } from "../../features/userSlice";

const SIdebarOption = ({ Icon, title, index }) => {
	const dispatch = useDispatch();
	const { activeTab } = useSelector(state => state.user);
	const active = activeTab === index;
	const handler = () => {
		dispatch(setSearchTerm(""));
		dispatch(setSearchResults([]));
		dispatch(setActiveTab(index));
	};
	return (
		<div className={`sidebarOption ${active && "active"}`} onClick={handler}>
			<Icon />
			<h3 className="sidebarOption__title">{title}</h3>
		</div>
	);
};

export default SIdebarOption;
