const registerForm = document.getElementById("registerForm");
const errorEl = document.getElementById("error");

const cmsDatabase = JSON.parse(localStorage.getItem("cms")) || [];
let subjects = JSON.parse(localStorage.getItem("subjects")) || [];
let currentRole = null;

// Register User
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const role = document.getElementById("reg-roles").value;

  if (!username || !password || !role) {
    errorEl.textContent = "All fields are required.";
    return;
  }

  const userExists = cmsDatabase.some((user) => user.username === username);
  if (userExists) {
    errorEl.textContent = "User already exists!";
    return;
  }

  cmsDatabase.push({ username, password, role });
  localStorage.setItem("cms", JSON.stringify(cmsDatabase));

  errorEl.style.color = "green";
  errorEl.textContent = "User registered successfully!";

  registerForm.reset();
});

// Login User
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("roles").value;

  if (!role) {
    loginError.style.color = "red";
    loginError.textContent = "Please select a role!";
    return;
  }

  const users = JSON.parse(localStorage.getItem("cms")) || [];

  const user = users.find(
    (u) => u.username === username && u.password === password && u.role === role
  );

  if (!user) {
    loginError.style.color = "red";
    loginError.textContent = "Invalid username, password, or role!";
    return;
  }

  loginError.style.color = "green";
  loginError.textContent = "Login successful!";

  // save current role
  currentRole = role;

  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "none";

  if (role === "Admin") {
    document.getElementById("adminsData").style.display = "block";
    displaySubjects();
  } else {
    document.getElementById("studentsData").style.display = "block";
    displaySubjects();
  }
});

// Subject Functions
function addSubject() {
  const subCode = document.getElementById("subjectCode").value.trim();
  const subName = document.getElementById("subjectName").value.trim();
  const msg = document.getElementById("message");

  if (!subCode || !subName) {
    msg.innerText = "Please enter subject code and name!";
    msg.style.color = "red";
    msg.style.display = "block";
    return;
  }

  const exists = subjects.some((s) => s.subCode === subCode);
  if (exists) {
    msg.innerText = "Subject code already exists!";
    msg.style.color = "red";
    msg.style.display = "block";
    return;
  }

  subjects.push({ subCode, subName });
  localStorage.setItem("subjects", JSON.stringify(subjects));

  msg.innerText = "Subject added successfully!";
  msg.style.color = "green";
  msg.style.display = "block";

  document.getElementById("subjectCode").value = "";
  document.getElementById("subjectName").value = "";

  displaySubjects();
}

function updateSubject() {
  const subCode = document.getElementById("subjectCode").value.trim();
  const subName = document.getElementById("subjectName").value.trim();
  const msg = document.getElementById("message");

  const index = subjects.findIndex((s) => s.subCode === subCode);
  if (index === -1) {
    msg.innerText = "Subject not found!";
    msg.style.color = "red";
    msg.style.display = "block";
    return;
  }

  subjects[index].subName = subName;
  localStorage.setItem("subjects", JSON.stringify(subjects));

  msg.innerText = "Subject updated successfully!";
  msg.style.color = "green";
  msg.style.display = "block";

  displaySubjects();
}

function deleteSubject() {
  const subCode = document.getElementById("subjectCode").value.trim();
  const msg = document.getElementById("message");

  const newSubjects = subjects.filter((s) => s.subCode !== subCode);
  if (newSubjects.length === subjects.length) {
    msg.innerText = "Subject not found!";
    msg.style.color = "red";
    msg.style.display = "block";
    return;
  }

  subjects = newSubjects;
  localStorage.setItem("subjects", JSON.stringify(subjects));

  msg.innerText = "Subject deleted successfully!";
  msg.style.color = "green";
  msg.style.display = "block";

  displaySubjects();
}

// Display Subjects
function displaySubjects() {
  const adminContainer = document.querySelector(".displaySubjects");
  const studentContainer = document.getElementById("studentsData");

  if (currentRole === "Admin") {
    adminContainer.innerHTML = "";
    if (subjects.length === 0) {
      adminContainer.innerHTML = "<p>No subjects added</p>";
      return;
    }
    subjects.forEach((sub, index) => {
      adminContainer.innerHTML += `
                <p>
                    ${index + 1}. ${sub.subCode} - ${sub.subName}
                    <button onclick="editSubject('${
                      sub.subCode
                    }')">Edit</button>
                    <button onclick="deleteSubjectByCode('${
                      sub.subCode
                    }')">Delete</button>
                </p>`;
    });
  }

  if (currentRole === "Student") {
    studentContainer.innerHTML = `<button onclick="logOutStudent()">Log Out</button><h3>Subjects</h3>`;
    if (subjects.length === 0) {
      studentContainer.innerHTML += "<p>No subjects available</p>";
      return;
    }
    subjects.forEach((sub, index) => {
      studentContainer.innerHTML += (
        <p>
          ${index + 1}. ${sub.subCode} - ${sub.subName}
        </p>
      );
    });
  }
}

// Prefill subject fields for editing
function editSubject(subCode) {
  const subject = subjects.find((s) => s.subCode === subCode);
  if (subject) {
    document.getElementById("subjectCode").value = subject.subCode;
    document.getElementById("subjectName").value = subject.subName;
    document.getElementById("message").style.display = "none";
  }
}

// Delete subject directly from list
function deleteSubjectByCode(subCode) {
  const msg = document.getElementById("message");
  const newSubjects = subjects.filter((s) => s.subCode !== subCode);
  if (newSubjects.length === subjects.length) {
    msg.innerText = "Subject not found!";
    msg.style.color = "red";
    msg.style.display = "block";
    return;
  }

  subjects = newSubjects;
  localStorage.setItem("subjects", JSON.stringify(subjects));

  msg.innerText = "Subject deleted successfully!";
  msg.style.color = "green";
  msg.style.display = "block";

  displaySubjects();
}

// Logout Functions
function logOutAdmin() {
  currentRole = null;
  document.getElementById("adminsData").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "block";
}

function logOutStudent() {
  currentRole = null;
  document.getElementById("studentsData").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "block";
}
