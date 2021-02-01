import React, { useRef, useState } from 'react'
import Form from './Form'
import "./Modal.css";

import useOutsideClick from "./useOutsideClick";

export function OtherModal({ onSubmit }) {
	const [show, setState] = useState(false);
	const ref = useRef();

	useOutsideClick(ref, () => {
		if (show) closeModal();
	});

	const closeModal = () => {
		setState(false);
	};

	const onKeyDown = (event) => {
		if (event.keyCode === 27) {
			closeModal();
		}
	};


	return (
		<div className="App">
			<button onClick={() => setState(!show)}>Menu</button>
			{show && (
				<aside
					tag="aside"
					role="dialog"
					tabIndex="-1"
					aria-modal="true"
					className="modal-cover"
					onKeyDown={onKeyDown}
				>
					<div className="modal-area" ref={ref}>
						<button
							aria-label="Close Modal"
							aria-labelledby="close-modal"
							className="_modal-close"
							onClick={() => setState(false)}
						>
							<span id="close-modal" className="_hide-visual">
								Close
							</span>
							<svg className="_modal-close-icon" viewBox="0 0 40 40">
								<path d="M 10,10 L 30,30 M 30,10 L 10,30" />
							</svg>
						</button>
						<div className="modal-body">
							<Form onSubmit={onSubmit}/>
						</div>
					</div>
				</aside>
			)}
		</div>
	);
}

export default OtherModal;
