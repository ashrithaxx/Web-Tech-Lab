export default function TaskItem({ todo, onDelete }) {
  return (
    <li className="task-item">
      <span>{todo.task}</span>
      <button className="delete-btn" onClick={() => onDelete(todo._id)}>
        Delete
      </button>
    </li>
  );
}
