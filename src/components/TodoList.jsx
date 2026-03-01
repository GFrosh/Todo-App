import "../styles/List.css";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function TodoList({ todos, setTodos }) {
	const [status, setStatus] = useState("total");

	if (todos.length === 0) {
		return <p>No tasks yet. Your productivity is theoretical.</p>;
	}

	function updateStatus(id, value) {
		const updatedTodos = todos.map((todo) =>
		todo.id === id
			? { ...todo, completed: value }
			: todo
		);

		setTodos(updatedTodos);
	}

	return (
		<div className="list">
			<div className="statuses">
				<button
				id="total"
				className="selected"
				onClick={() => {
					setStatus("total");
					console.log(status);
				}}>
					Total
				</button>
				<button
				id="pending"
				onClick={() => {
					setStatus("pending");
					console.log(status);
				}}
				>
					Pending
				</button>
				<button
				id="completed"
				onClick={() => {
					setStatus("completed");
					console.log(status);
				}}
				>
					Completed
				</button>
			</div>
			{todos.map((todo) => (
				<div
				key={todo.id}
				className={`per-todo ${status === "completed" && !todo.completed ? "hidden" : ""} ${status === "pending" && todo.completed ? "hidden" : ""}`}
				>

					<p>
						<strong
						style={{
							textDecoration: todo.completed ? "line-through" : "none",
							color: todo.completed ? "gray" : "black"
						}}
						>
						{todo.text}
						</strong>
					</p>

					<p>Mood: {todo.mood}</p>

					<p>Status: {todo.completed ? "Completed" : "Pending"}</p>

					
					{/* NEED TO DESIGN THIS MORE */}
					<button onClick={() => updateStatus(todo.id, false)}>
						<FaTimes />
					</button>
					<button onClick={() => updateStatus(todo.id, true)}>
						<FaCheck />
					</button>

				</div>
			))}
		</div>
	);
}

export default TodoList;
