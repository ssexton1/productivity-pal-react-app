import React, { useRef, useState } from "react";
import "./Modal.css";
import AddTaskForm from "../Task Files/TaskForms";
//import { Route, Switch, Link } from "react-router-dom";
import useOutsideClick from "./useOutsideClick";

export function Modal({ addTaskCallback }) {
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
		<div>
			<button className="btn btn-secondary" onClick={() => setState(!show)}>
				Add
			</button>
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
									<AddTaskForm
										addTaskCallback={addTaskCallback}
										closeModal={closeModal}
									/>
						</div>
					</div>
				</aside>
			)}
		</div>
	);
}

export default Modal;
