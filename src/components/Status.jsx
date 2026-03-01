import TodoList from "./TodoList";

const Status = () => {
    return (
		<div className="status">
			<div className="statuses">
				<button id="total">
					Total
				</button>
				<button id="pending">
					Pending
				</button>
				<button id="completed">
					Completed
				</button>
			</div>
			<div className="todo-lists">
				<TodoList />
			</div>
		</div>
	)
}

export default Status;
