import ReactDOM from "react-dom";
import React, { useRef, useState } from 'react'
//import Modal from './Modal'
import "./Modal.css";

import useOutsideClick from "./useOutsideClick";

export function OtherModal() {
	const [show, setSate] = useState(false);
	const ref = useRef();

	useOutsideClick(ref, () => {
		if (show) setSate(false);
	});

	return (
		<div className="App">
			<button onClick={() => setSate(!show)}>Menu</button>
			{show && (
				<aside
					tag="aside"
					role="dialog"
					tabIndex="-1"
					aria-modal="true"
					className="modal-cover"
				>
					<div className="modal-area" ref={ref}>
						<button
							aria-label="Close Modal"
							aria-labelledby="close-modal"
							className="_modal-close"
							onClick={() => setSate(false)}
						>
							<span id="close-modal" className="_hide-visual">
								Close
							</span>
							<svg className="_modal-close-icon" viewBox="0 0 40 40">
								<path d="M 10,10 L 30,30 M 30,10 L 10,30" />
							</svg>
						</button>
						<div className="modal-body">
							<h4>
								This is a menu <small>(Click outside to close)</small>
							</h4>
							<input type="text" />
						</div>
					</div>
				</aside>
			)}
		</div>
	);
}

export default OtherModal;
