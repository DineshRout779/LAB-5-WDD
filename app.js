const form = document.getElementById("form");

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function clearErrors() {
  window.scroll(0, document.body.scrollHeight);
  document.getElementById("err").innerHTML = "Please enter a valid email!";
}

const validate = (e) => {
  e.preventDefault();

  clearErrors();

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const phone = form.elements["phone"].value;
  const aadhar = form.elements["aadhar"].value;
  const course = form.elements["course"].value;
  const gender = form.elements["gender"].value;
  const address = form.elements["address"].value;
  const password = form.elements["password"].value;
  const confirm_password = form.elements["confirm_password"].value;

  let error = "";

  if (name == "") {
    error = "Please provide name";
  } else if (email == "") {
    error = "Please provide name";
  } else if (!isValidEmail(email)) {
    error = "Please provide valid email";
  } else if (phone == "") {
    error = "Please provide phone number";
  } else if (aadhar == "") {
    error = "Please provide aadhar number";
  } else if (course == "") {
    error = "Please select your course";
  } else if (gender == "") {
    error = "Please select your gender";
  } else if (address == "") {
    error = "Please provide your address";
  } else if (password == "") {
    error = "Please provide password";
  } else if (confirm_password == "") {
    error = "Please provide confirm password";
  } else if (password !== confirm_password) {
    error = "Passwords must be same";
  }

  if (error) {
    document.getElementById("err").innerHTML = error;
  } else {
    clearErrors();
    alert("Form submitted succeassfully!");
  }
};

form.addEventListener("submit", validate);
