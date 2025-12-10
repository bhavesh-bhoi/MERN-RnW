function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.className = "toast";
  }, 2500);
}

function getStudents() {
  return JSON.parse(localStorage.getItem("students")) || [];
}

function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name === "" || age === "") {
    showToast("Please Enter Name & Email!", "error");
    return;
  }

  let students = getStudents();
  students.push({ name, age });

  localStorage.setItem("students", JSON.stringify(students));
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";

  showToast("Student Added!", "success");
  loadTable();
}

function loadTable() {
  const table = document.getElementById("studentsTable");
  const students = getStudents();

  table.innerHTML = `
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>`;

  students.forEach((stu, i) => {
    table.innerHTML += `
          <tr>
            <td>${i}</td>
            <td>${stu.name}</td>
            <td>${stu.age}</td>
            <td>
              <button onClick="editStudent(${i})">Edit</button>
              <button onClick="deleteStudent(${i})">Delete</button>
            </td>
          </tr>`;
  });
}

function deleteStudent(i) {
  let students = getStudents();
  students.splice(i, 1);
  localStorage.setItem("students", JSON.stringify(students));
  loadTable();
}

// === Modal Edit Logic (replaces prompt) ===
let currentEditIndex = null;

function editStudent(i) {
  let students = getStudents();
  currentEditIndex = i;

  const editName = document.getElementById("editName");
  const editAge = document.getElementById("editAge");

  editName.value = students[i].name;
  editAge.value = students[i].age;

  openEditModal();
}

function openEditModal() {
  document.getElementById("editModalBackdrop").style.display = "flex";
}

function closeEditModal() {
  document.getElementById("editModalBackdrop").style.display = "none";
  currentEditIndex = null;
}

function saveEdit() {
  if (currentEditIndex === null) return;

  let students = getStudents();
  const editName = document.getElementById("editName").value.trim();
  const editAge = document.getElementById("editAge").value.trim();

  if (editName === "" || editAge === "") {
    showToast("Please enter valid Name & Age.", "error");
    return;
  }

  students[currentEditIndex].name = editName;
  students[currentEditIndex].age = editAge;

  localStorage.setItem("students", JSON.stringify(students));
  loadTable();
  closeEditModal();
}

loadTable();
