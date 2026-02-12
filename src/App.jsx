import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import TodoInput from "./components/TodoInput";

function App() {
  // list of todos
  const [todos, setTodos] = useState([]);

  // currently selected mood
  const [currentMood, setCurrentMood] = useState("happy");

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
      <p>Current mood: {currentMood}</p>
      <p>Total todos: {todos.length}</p>
    </>
  );
}

export default App;
