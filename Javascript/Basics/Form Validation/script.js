function validForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  clearErrors();

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!name.match(nameRegex)) {
    document.getElementById("name").classList.add("error");
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
  if (!email.match(emailRegex)) {
    document.getElementById("email").classList.add("error");
    return false;
  }

  if (age < 1 || isNaN(age)) {
    alert("Please Enter a Valid Age!");
    document.getElementById("name").classList.add;
  }
  return true;
}

function clearErrors() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("error");
  });
}
