import "../styles/List.css";
import { FaCheck, FaTimes } from "react-icons/fa";

function TodoList({ todos, setTodos }) {

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
		<div>
			<h2>Todo List</h2>

			{todos.map((todo) => (
				<div key={todo.id} className="per-todo">

				<p>
					<strong
					style={{
						textDecoration: todo.completed ? "line-through" : "none"
					}}
					>
					{todo.text}
					</strong>
				</p>

				<p>Mood: {todo.mood}</p>

				<p>Status: {todo.completed ? "Completed" : "Pending"}</p>

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
