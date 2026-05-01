import "../styles/List.css";
import { useState, useMemo } from "react";
import { FaCheck, FaUndo, FaTrash } from "react-icons/fa";
import { MOODS } from "../moodConfig";

function TodoList({ todos, setTodos }) {
	const [filter, setFilter] = useState("total");

	const updateStatus = (id, completed) =>
		setTodos(prevTodos =>
			prevTodos.map(todo => todo.id === id ? { ...todo, completed } : todo)
		);

	const deleteTodo = (id) =>
		setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));

	const filteredTodos = useMemo(() => {
		if (filter === "pending")   return todos.filter(t => !t.completed);
		if (filter === "completed") return todos.filter(t =>  t.completed);
		return todos;
	}, [todos, filter]);

	return (
		<div className="list">
			<div className="statuses">
				<button
					className={filter === "total" ? "selected" : ""}
					onClick={() => setFilter("total")}
				>
					All ({todos.length})
				</button>
				<button
					className={filter === "pending" ? "selected" : ""}
					onClick={() => setFilter("pending")}
				>
					Pending ({todos.filter(t => !t.completed).length})
				</button>
				<button
					className={filter === "completed" ? "selected" : ""}
					onClick={() => setFilter("completed")}
				>
					Done ({todos.filter(t => t.completed).length})
				</button>
			</div>

			{filteredTodos.length === 0 ? (
				<div className="empty-state">
					<div className="empty-icon">📋</div>
					<p>No tasks here. Add something above!</p>
				</div>
			) : (
				filteredTodos.map(todo => (
					<div
						key={todo.id}
						className={`per-todo${todo.completed ? " completed-card" : ""}`}
					>
						<div className="todo-content">
							<p className={`todo-text${todo.completed ? " done" : ""}`}>
								{todo.text}
							</p>
							<div className="todo-meta">
								<span className="mood-badge">
									{MOODS[todo.mood]?.emoji} {todo.mood}
								</span>
								<span className={`status-badge${todo.completed ? "" : " pending"}`}>
									{todo.completed ? "Completed" : "Pending"}
								</span>
							</div>
						</div>

						<div className="actions">
							{todo.completed ? (
								<button
									className="btn-undo"
									title="Mark as pending"
									onClick={() => updateStatus(todo.id, false)}
								>
									<FaUndo />
								</button>
							) : (
								<button
									className="btn-done"
									title="Mark as done"
									onClick={() => updateStatus(todo.id, true)}
								>
									<FaCheck />
								</button>
							)}
							<button
								className="btn-delete"
								title="Delete task"
								onClick={() => deleteTodo(todo.id)}
							>
								<FaTrash />
							</button>
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default TodoList;
