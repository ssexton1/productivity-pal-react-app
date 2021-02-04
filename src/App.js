import TaskTimerDecider from "./Task Files/TaskTimerDecider";
import { useState } from "react";
import React from "react";
import Modal from './Modal Files/Modal'
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

			<div class="navbar">
				<div className="add-button">
					<Modal onSubmit={onSubmit} addTaskCallback={addTask}/>
				</div>
			</div>

			<header>
					<h1 className="pageTitle">Productivity Pal</h1>
			</header>

			<div className="main">
				<TaskTimerDecider tasks={tasks} addTaskCallback={addTask} />
			</div>

			<footer>
				<address>
					Contact us at <a href="Email@Gmail.com">Email@Gmail.com</a>, or at{" "}
					<a href="tel:866-588-0569">Telephone Number</a>.
				</address>
				<p>&copy; 2020</p>
			</footer>
		</div>
	);
}

export default App;
