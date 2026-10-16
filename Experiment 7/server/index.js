import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Todo from "./models/Todo.js";

const app = express();
app.use(cors());
app.use(express.json());

// READ: all tasks, oldest first
app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: 1 });
  res.json(todos);
});

// CREATE
app.post("/api/todos", async (req, res) => {
  if (!req.body.task || !req.body.task.trim())
    return res.status(400).json({ error: "Task is required" });
  const todo = await Todo.create({
    task: req.body.task,
    completed: req.body.completed || false,
  });
  res.status(201).json(todo);
});

// UPDATE
app.put("/api/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

// DELETE
app.delete("/api/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error(err));
