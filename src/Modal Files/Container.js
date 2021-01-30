import React, { useState, useRef } from "react";
import { Modal } from "./Modal";
import TriggerButton from "./TriggerButton";

export function Container(props) {
	const modalItem = useRef(null);
	//const triggerButton = useRef(null);
	//const closeButton = useRef(null);
	const [isShown, setIsShown] = useState(false);

	const toggleScrollLock = () => {
		document.querySelector("html").classList.toggle("scroll-lock");
	};

	const showModal = () => {
		setIsShown(true)
		// closeButton.current.focus();
		toggleScrollLock();
	};

	const closeModal = () => {
		setIsShown(false);
		//triggerButton.current.focus();
		toggleScrollLock();
	};

	const onKeyDown = (event) => {
		if (event.keyCode === 27) {
			closeModal();
		}
	};

	// const onClickOutside = (event) => {
	// 	if (this.modal && this.modal.contains(event.target)) return;
  	// 	closeModal();
	// };

	return (
		<React.Fragment>
			<TriggerButton
				showModal={showModal}
				//ref={triggerButton}
				triggerText={props.triggerText}
			/>
			{isShown ? (
				<Modal
					onSubmit={props.onSubmit}
					//modalRef={(n) => (modal = n)}
					//ref={closeButton}
					closeModal={closeModal}
					onKeyDown={onKeyDown}
					//onClickOutside={onClickOutside}
				/>
			) : null}
		</React.Fragment>
	);
}

export default Container