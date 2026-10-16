export default function TaskForm({ newTodo, onChange, onSubmit }) {
  return (
    <form className="task-form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newTodo}
        onChange={onChange}
      />
      <button type="submit" className="add-btn">Add Task</button>
    </form>
  );
}
