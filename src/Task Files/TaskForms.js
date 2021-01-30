import { useState } from "react";

export function AddTaskForm(props) {
	const [inputtedValue, setInputtedValue] = useState("");

	const handleChange = (event) => {
		let newValue = event.target.value;
		setInputtedValue(newValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		props.addTaskCallback(inputtedValue, 30000);
		setInputtedValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="form-control mb-3"
				placeholder="What else do you have to do?"
				value={inputtedValue}
				onChange={handleChange}
			/>
			<button type="submit" className="btn btn-primary">
				Add Task To List
			</button>
		</form>
	);
}
