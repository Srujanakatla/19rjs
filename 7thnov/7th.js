function validation() {
    let Name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let Password = document.getElementById("password").value.trim();
    let error_nameMsg = document.getElementById("p1");
    let error_passwordMsg = document.getElementById("p2");
    let error_emailMsg = document.getElementById("p3");
    error_nameMsg.textContent = "";
    error_passwordMsg.textContent = "";
    error_emailMsg.textContent = "";
  
    let namePattern = /^[A-Za-z0-9]+$/;
    let emailPattern = /^[a-zA-Z0-9#$^&*\-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^[A-Za-z0-9@#]{8,}$/;
  
    if (!namePattern.test(Name)) {
      error_nameMsg.textContent =
        "Invalid name: only letters and numbers allowed.";
    }
    if (!emailPattern.test(email)) {
      error_emailMsg.textContent = "Invalid email format.";
    }
    if (!passwordPattern.test(Password)) {
      error_passwordMsg.textContent =
        "Invalid password: must be at least 8 characters and contain only letters, numbers, @, or #.";
    } else {
      error_msg.textContent = "All inputs are valid!";
    }
  }