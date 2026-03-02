import { useState } from "react";
import "./styles/App.css";
import MoodSelector from "./components/MoodSelector";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
	// list of todos
	const [todos, setTodos] = useState([]);

	// currently selected mood
	const [currentMood, setCurrentMood] = useState("lazy");

	return (
	<>
		<h1>Mood Swing Todo App</h1>
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
		<p>Total todos: {todos.length}</p>
	</>
	);
}

export default App;
