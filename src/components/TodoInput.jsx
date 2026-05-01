import { useState } from "react";
import "../styles/TodoInput.css";
import { FaPlus } from "react-icons/fa";

function TodoInput({ currentMood, todos, setTodos }) {
	
	const [text, setText] = useState("");
	const [error, setError] = useState("");

	function handleAddTodo() {
		if (text.trim() === "") {
			setError("Please enter a task before adding.");
			return;
		}

		const newTodo = {
			id: crypto.randomUUID(),
			text: text.trim(),
			mood: currentMood,
			completed: false,
			createdAt: Date.now()
		};
		setTodos([ ...todos, newTodo ]);
		setText("");
		setError("");
	}

	function handleKeyDown(e) {
		if (e.key === "Enter") handleAddTodo();
	}

	function handleTextChange(e) {
		setText(e.target.value);
		if (error) setError("");
	}

	return (
		<div className="todo-input">
			<h2>Add a Task</h2>
			<div className="input-row">
				<input
					type="text"
					placeholder="What do you need to do?"
					value={text}
					onChange={handleTextChange}
					onKeyDown={handleKeyDown}
					aria-invalid={!!error}
				/>
				<button className="btn-add" onClick={handleAddTodo}>
					<FaPlus /> Add
				</button>
			</div>
			{error && <p className="input-error">{error}</p>}
		</div>
	);
}

export default TodoInput;
