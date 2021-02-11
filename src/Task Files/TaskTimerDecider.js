import TaskList from "./Tasks";
// import TimerComponent from "./Timer";

function TaskTimerDecider(props) {
	// let onEdit = "no-display";
	// let onTasks = "";

	// if (props.showEdit) {
	// 	onEdit = "";
	// 	onTasks = "no-display";
	// }

	// const goBack = (event) => {
	// 	props.editTimerCallback(false);
	// };

	return (
		// <div>
		// 	<div className={onEdit}>
		// 		<div onClick={goBack}>Go Back</div>
		// 		<TimerComponent
		// 			timerLength={props.timerLength}
		// 			editTimerCallback={props.editTimerCallback}
		// 			editTimerLength={props.editTimerLength}
		// 		/>
		// 	</div>

		// 	<div className={onTasks}>
				<TaskList
					tasks={props.tasks}
					addTaskCallback={props.addTaskCallback}
					deleteTask={props.deleteTask}
				/>
		// 	</div>
		// </div>
	);
}

export default TaskTimerDecider;
