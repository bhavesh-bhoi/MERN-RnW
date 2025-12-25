const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const column = document.querySelectorAll(".task-list");

function createTask(text) {
  const task = document.createElement("div");
  task.className = "task";
  task.draggable = true;
  task.innerHTML = `
            <span class="text">${text}</span>
            <i class="fa-solid fa-trash delete" title="Delete"></i>
            `;
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
    saveToLocal();
  });
  return task;
}

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") {
    return;
  }
  const task = createTask(value);
  document.querySelector('[data-status="todo"] .task-list').appendChild(task);
  input.value = "";
  saveToLocal();
});
column.forEach((col) => {
  col.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    if (dragging) {
      col.appendChild(dragging);
    }
  });
});

document.querySelector(".board").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.stopPropagation();
    e.target.parentElement.remove();
    saveToLocal();
  }
});

function saveToLocal() {
  const data = [];
  document.querySelectorAll(".column").forEach((col) => {
    const status = col.dataset.status;
    data[status] = [];
    col.querySelectorAll(".task .text").forEach((t) => {
      data[status].push(t.textContent);
    });
  });
  localStorage.setItem("kanban", JSON.stringify(data));
}

function loadFromLocal() {
  const data = JSON.parse(localStorage.getItem("kanban"));
  if (!data) {
    return;
  }
  Object.keys(data).forEach((status) => {
    const list = document.querySelector(`[data-status="${status}"].task-list`);
    data[status].forEach((text) => {
      list.appendChild(createTask(text));
    });
  });
}
loadFromLocal();
