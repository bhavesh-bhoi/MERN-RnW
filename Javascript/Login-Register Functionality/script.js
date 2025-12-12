const usersDB = JSON.parse(localStorage.getItem("users")) || [];

function registerUser() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (username && password) {
    if (usersDB.some((user) => user.username === username)) {
      alert("User Already Exists! Please Choose Another Username.");
    } else {
      usersDB.push({ username, password });
      localStorage.setItem("users", JSON.stringify(usersDB));
      document.getElementById("reg-username").value = "";
      document.getElementById("reg-password").value = "";
    }
  } else {
    alert("Please Enter Username and Password!");
  }
}

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  const user = usersDB.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("user-name").innerText = user.username;
    errorMessage.style.display = "none";

    localStorage.setItem("loggedInUser", JSON.stringify(user));
  } else {
    errorMessage.style.display = "block";
  }
}

function logoutUser() {
  localStorage.removeItem("loggedInUser");

  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "block";
  document.getElementById("welcome-message").style.display = "none";
}

function checkLoggedInUser() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("user-name").innerText = loggedInUser.username;
  }
}

checkLoggedInUser();
