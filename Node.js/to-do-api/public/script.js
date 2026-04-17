const API = "/todos";

// Retrive data from local storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editId = null;

// Save data to local storage
function saveLocal() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Render data to the DOM
function render() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    li.innerHTML = `
  <span>${todo.text}</span>
  <div class="todo-actions">
    <button class="edit-btn" onclick="startEdit(${todo.id})">✏️</button>
    <button class="delete-btn" onclick="deleteTodo(${todo.id})">🗑️</button>
  </div>
`;

    list.appendChild(li);
  });
}

// Add or Update todo
async function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value;

  if (!text) return;

  // Update
  if (editId !== null) {
    await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    todos = todos.map((t) => (t.id === editId ? { ...t, text } : t));

    editId = null;
  }
  // Add
  else {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const newTodo = await res.json();
    todos.unshift(newTodo);
  }

  input.value = "";
  saveLocal();
  render();
}

// Start Edit
function startEdit(id) {
  const todo = todos.find((t) => t.id === id);
  const input = document.getElementById("todoInput");

  input.value = todo.text;
  input.focus();

  editId = id;
}

// Delete todo
async function deleteTodo(id) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");

  if (!confirmDelete) return;

  await fetch(`${API}/${id}`, { method: "DELETE" });

  todos = todos.filter((t) => t.id !== id);

  saveLocal();
  render();
}

render();
