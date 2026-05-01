import { useState, useEffect } from "react";
import "./styles/App.css";
import MoodSelector from "./components/MoodSelector";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
	// list of todos
	const [todos, setTodos] = useState([]);

	// currently selected mood
	const [currentMood, setCurrentMood] = useState("lazy");

	// Apply mood class to body for global theming
	useEffect(() => {
		document.body.className = `mood-${currentMood}`;
	}, [currentMood]);

	return (
		<div className="app-container">
			<h1 className="app-title">Mood Swing To-Do ✅</h1>
			<MoodSelector
				currentMood={currentMood}
				setCurrentMood={setCurrentMood}
			/>
			<TodoInput
				currentMood={currentMood}
				todos={todos}
				setTodos={setTodos}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
			<p className="todo-count">
				{todos.length === 0
					? "No tasks yet — add one above!"
					: `${todos.filter(t => t.completed).length} of ${todos.length} task${todos.length !== 1 ? "s" : ""} completed`}
			</p>
		</div>
	);
}

export default App;
