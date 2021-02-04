import { useState } from "react";

export function AddTaskForm(props) {
	const [inputtedTask, setInputtedTask] = useState("");
	const [length, setLength] = useState("");

	const handleTaskChange = (event) => {
		let newValue = event.target.value;
		setInputtedTask(newValue);
	};

	const handleTimerChange = (event) => {
		let newValue = event.target.value;
		setLength(newValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addTaskCallback(inputtedTask, length);
		props.closeModal();
		//setInputtedTask("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="form-control mb-3"
				placeholder="What else do you have to do?"
				value={inputtedTask}
				onChange={handleTaskChange}
			/>
			<input
				className="form-control mb-3"
				placeholder="How Long a Timer would you like?"
				value={length}
				onChange={handleTimerChange}
			/>
			<button type="submit" className="btn btn-primary">
				Add Task To List
			</button>
		</form>
	);
}

export default AddTaskForm;
