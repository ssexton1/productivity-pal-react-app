import React from "react";
import TimerComponent from "./Timer";

export function Task(props) {
	const theTask = props.task;

	const deleteTask = (event) => {
		props.deleteTask(theTask);
	};

	return (
		<li>
			{theTask.description}{" "}
			<button className="btn btn-danger ml-5" onClick={deleteTask}>X</button>
			{
				<TimerComponent
					timerLength={theTask.duration}
				/>
			}
		</li>
	);
}

export function TaskList(props) {
	let taskComponents = props.tasks.map((eachTask) => {
		let singleTaskElem = (
			<Task
				key={eachTask.id}
				task={eachTask}
				deleteTask={props.deleteTask}
			/>
		);
		return singleTaskElem;
	});

	return (
		<div>
			<ol>{taskComponents}</ol>
		</div>
	);
}

export default TaskList;
