let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// DOM Elements
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Event Listeners
taskForm.addEventListener("submit", addTask);
document
  .getElementById("priorityFilter")
  .addEventListener("change", displayTasks);
document.getElementById("search").addEventListener("input", displayTasks);

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add or Update Task
function addTask(e) {
  e.preventDefault();

  const id = document.getElementById("taskId").value;
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  if (!title || !dueDate) {
    alert("Title and Due Date are required.");
    return;
  }

  if (id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
  } else {
    tasks.push({
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      priority,
    });
  }

  saveTasks();
  taskForm.reset();
  document.getElementById("taskId").value = "";
  displayTasks();
}

// Display Tasks
function displayTasks() {
  const filter = document.getElementById("priorityFilter").value;
  const searchText = document.getElementById("search").value.toLowerCase();

  taskList.innerHTML = "";

  const filteredTasks = tasks
    .filter((task) => filter === "all" || task.priority === filter)
    .filter((task) =>
      (task.title + task.description).toLowerCase().includes(searchText)
    );

  if (!filteredTasks.length) {
    taskList.innerHTML = `<p style="opacity:.6">No tasks found.</p>`;
    return;
  }

  filteredTasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = `task ${task.priority}`;

    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description || "No description"}</p>
      <p><strong>Due:</strong> ${new Date(
        task.dueDate
      ).toLocaleDateString()}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
      <div class="task-actions">
        <button onclick="editTask('${task.id}')">Edit</button>
        <button class="delete-btn" onclick="deleteTask('${
          task.id
        }')">Delete</button>
      </div>
    `;

    taskList.appendChild(div);
  });
}

// Edit Task
function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  document.getElementById("taskId").value = task.id;
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("priority").value = task.priority;
}

// Delete Task
function deleteTask(id) {
  if (!confirm("Are you sure you want to delete this task?")) return;

  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  displayTasks();
}

// Initial display
displayTasks();
