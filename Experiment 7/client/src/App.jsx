import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = "http://localhost:5000/api/todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // fetch existing tasks on mount
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (e) => setNewTodo(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: newTodo, completed: false }),
    });
    const saved = await res.json();
    setTodos([...todos, saved]);
    setNewTodo("");
  };

  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <div className="app">
      <h1>MERN Stack Todo List</h1>
      <TaskForm
        newTodo={newTodo}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <TaskList todos={todos} onDelete={handleDelete} />
    </div>
  );
}
