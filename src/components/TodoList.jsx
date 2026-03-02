import "../styles/List.css";
import { useState, useMemo } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function TodoList({ todos, setTodos }) {
  	const [status, setStatus] = useState("total");

	const updateStatus = (id, completed) => setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, completed } : todo));


	const filteredTodos = useMemo(() => {
		if (status === "pending") return todos.filter(t => !t.completed);
		if (status === "completed") return todos.filter(t => t.completed);
		return todos;
	}, [todos, status]);

	return (
		<div className="list">
			<div className="statuses">
				<button
				className={status === "total" ? "selected" : ""}
				onClick={() => setStatus("total")}
				>
				Total
				</button>

				<button
				className={status === "pending" ? "selected" : ""}
				onClick={() => setStatus("pending")}
				>
				Pending
				</button>

				<button
				className={status === "completed" ? "selected" : ""}
				onClick={() => setStatus("completed")}
				>
				Completed
				</button>
		</div>

			{filteredTodos.length === 0 ? (
				<p>No tasks yet. Your productivity is theoretical.</p>
			) : (
				filteredTodos.map(todo => (
					<div key={todo.id} className="per-todo">
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

					<div className="actions">
					<button onClick={() => updateStatus(todo.id, false)}>
						<FaTimes />
					</button>

					<button onClick={() => updateStatus(todo.id, true)}>
						<FaCheck />
					</button>
					</div>
				</div>
			))
		)}
		</div>
	);
}

export default TodoList;
