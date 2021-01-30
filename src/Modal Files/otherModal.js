import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
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
      <button onClick={() => setSate(!show)}>
        Menu
      </button>
      {show && (
        <div ref={ref} className="modal-area">
          <h4>
            This is a menu <small>(Click outside to close)</small>
          </h4>
          <input type="text" />
          <button onClick={() => setSate(false)}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default OtherModal;