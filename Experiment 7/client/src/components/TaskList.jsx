import TaskItem from "./TaskItem";

export default function TaskList({ todos, onDelete }) {
  return (
    <ul className="task-list">
      {todos.map((todo) => (
        <TaskItem key={todo._id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}
