import React from "react";
import TimerComponent from "./Timer";
import { AddTaskForm } from "./TaskForms";

export function Task(props) {
	const theTask = props.task;

	return (
		<li>
			{theTask.description}{" "}
			{
				<TimerComponent
					timerLength={theTask.duration}
				/>
			}
		</li>
	);
}

export default function TaskList(props) {
	let taskComponents = props.tasks.map((eachTask) => {
		let singleTaskElem = (
			<Task
				key={eachTask.id}
				task={eachTask}
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
