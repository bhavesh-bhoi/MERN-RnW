const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let todos = [];
let idCounter = 1;

// Add Todo
app.post("/todos", (req, res) => {
  const { text } = req.body;
  const newTodo = { id: idCounter++, text };
  todos.push(newTodo);
  res.json(newTodo);
});

// Read Todo
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Update Todo
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ error: "Not found" });

  todo.text = text;
  res.json(todo);
});

// Delete Todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
