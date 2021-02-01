import TaskTimerDecider from "./Task Files/TaskTimerDecider";
import { useState } from "react";
import React from "react";
import Container from "./Modal Files/Container";
import Filler from "./Modal Files/Filler";
import OtherModal from './Modal Files/OtherModal'
//import { Route, Switch, Redirect } from 'react-router-dom';

function App(props) {
	const [tasks, setTasks] = useState(props.tasks);
	// const [showEdit, setShowEdit] = useState(false);
	// const [timerLength, setTimerLength] = useState(0);

	const addTask = (taskDescription, timerLength) => {
		let newTask = {
			id: tasks.length + 1,
			description: taskDescription,
			duration: timerLength,
		};

		let updatedTaskArray = tasks.map((theTask) => {
			let taskCopy = { ...theTask };
			return taskCopy;
		});
		updatedTaskArray.push(newTask);

		setTasks(updatedTaskArray);
	};

	// const editTimerCallback = (timerItem) => {
	// 	setShowEdit(timerItem);
	// };

	// const editTimerLength = (length) => {
	// 	setTimerLength(length);
	// };

	const triggerText = "Open Form";
	const onSubmit = (event) => {
		event.preventDefault(event);
		console.log(event.target.name.value);
		console.log(event.target.email.value);
	};

	return (
		<div className="container">
			<Filler />
			{/* <Container triggerText={triggerText} onSubmit={onSubmit} /> */}
			<OtherModal onSubmit={onSubmit}/>
			<Filler />
			<Filler />
			<Filler />
			<Filler />
			

			{/* <header>
				<h1 className="pageTitle">Productivity Pal</h1>
			</header>

			<TaskTimerDecider tasks={tasks} addTaskCallback={addTask} />

			<footer>
				<address>
					Contact us at <a href="Email@Gmail.com">Email@Gmail.com</a>, or at{" "}
					<a href="tel:866-588-0569">Telephone Number</a>.
				</address>
				<p>&copy; 2020</p>
			</footer> */}
		</div>
	);
}

export default App;
