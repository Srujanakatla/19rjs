
const usernameRegex = /^[A-Z][a-zA-Z0-9]{2,}$/; 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/; 
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/; 

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
username.addEventListener("blur", function () {
  if (username.value === "") {
    usernameError.textContent = "Username is required.";
  } else if (!usernameRegex.test(username.value)) {
    usernameError.textContent =
      "Username must start with an uppercase letter and be at least 3 characters long.";
  } else {
    usernameError.textContent = "";
  }
});

email.addEventListener("blur", function () {
  if (email.value === "") {
    emailError.textContent = "Email is required.";
  } else if (!emailRegex.test(email.value)) {
    emailError.textContent = "Please enter a valid email ending with .com.";
  } else {
    emailError.textContent = "";
  }
});

password.addEventListener("blur", function () {
  if (password.value === "") {
    passwordError.textContent = "Password is required.";
  } else if (!passwordRegex.test(password.value)) {
    passwordError.textContent =
      "Password must be at least 8 characters with uppercase, lowercase, number, and special character.";
  } else {
    passwordError.textContent = "";
  }
});
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  if (!usernameRegex.test(username.value)) {
    usernameError.textContent =
      "Username must start with an uppercase letter and be at least 3 characters long.";
    isValid = false;
  }
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Please enter a valid email ending with .com.";
    isValid = false;
  }
  if (!passwordRegex.test(password.value)) {
    passwordError.textContent =
      "Password must be at least 8 characters with uppercase, lowercase, number, and special character.";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("userEmail", email.value);
    localStorage.setItem("userPassword", password.value);
    alert("Signup Successful!");

    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
  }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const loginEmail = document.getElementById("loginEmail").value.trim();
  const loginPassword = document.getElementById("loginPassword").value.trim();

  const signUpEmail = localStorage.getItem("userEmail");
  const signUpPassword = localStorage.getItem("userPassword");

  const loginEmailErrMsg = document.getElementById("loginEmailErrMsg");
  const loginPasswordErrMsg = document.getElementById("loginPasswordErrMsg");

  loginEmailErrMsg.textContent = "";
  loginPasswordErrMsg.textContent = "";

  let isLoginValid = true;

  if (loginEmail !== signUpEmail) {
    loginEmailErrMsg.textContent = "Email not found. Please sign up first.";
    isLoginValid = false;
  }
  if (loginPassword !== signUpPassword) {
    loginPasswordErrMsg.textContent = "Incorrect password.";
    isLoginValid = false;
  }

  if (isLoginValid) {
    alert("Login Successful!");
    window.location.href = "./sign.html";
  }
});

