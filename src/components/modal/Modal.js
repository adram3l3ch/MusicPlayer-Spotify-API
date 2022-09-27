import React from "react";
import { useSelector } from "react-redux";

const Modal = () => {
	const { modal } = useSelector(state => state.user);
	return (
		<div className={modal.visible ? "modal active" : "modal"}>
			<h3>{modal.message}</h3>
		</div>
	);
};

export default Modal;
