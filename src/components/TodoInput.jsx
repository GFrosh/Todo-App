import { useState } from "react";

function TodoInput({ currentMood, todos, setTodos }) {

  const [text, setText] = useState("");

  function handleAddTodo() {
    if (text.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      mood: currentMood,
      completed: false,
      createdAt: Date.now()
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  return (
    <div>
      <h2>Add Todo</h2>

      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
