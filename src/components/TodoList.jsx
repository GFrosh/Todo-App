function TodoList({ todos }) {

  if (todos.length === 0) {
    return <p>No tasks yet. Your productivity is theoretical.</p>;
  }

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid black",
            margin: "8px 0",
            padding: "8px"
          }}
        >
          <p>
            <strong>{todo.text}</strong>
          </p>

          <p>Mood: {todo.mood}</p>

          <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
