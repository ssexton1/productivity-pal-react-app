import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
// import firebase from 'firebase/app';
//import { BrowserRouter } from "react-router-dom";

const SAMPLE_TASKS = [
	{ id: 1, description: "Learn JSX", duration: 30000 },
	{ id: 2, description: "Learn about React State", duration: 30000 },
	{ id: 3, description: "Get some sleep", duration: 30000 },
];

ReactDOM.render(
		<App tasks={SAMPLE_TASKS} />,
	document.getElementById("root")
);
