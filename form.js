function setError(input, message) {
    input.className = "error";
    input.nextElementSibling.innerText = message;
    input.nextElementSibling.style.visibility = "visible";
}

function setSuccess(input) {
    input.className = "success";
    input.nextElementSibling.innerText = "";
    input.nextElementSibling.style.visibility = "hidden";
}

// Name: > 3 letters
function validateName() {
    let name = document.getElementById("name");
    if (name.value.length < 3) {
        setError(name, "Minimum 3 characters required");
    } else {
        setSuccess(name);
    }
}

// Email validation
function validateEmail() {
    let email = document.getElementById("email");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email.value)) {
        setError(email, "Invalid email format");
    } else {
        setSuccess(email);
    }
}

// Password validation
function validatePassword() {
    let password = document.getElementById("password");

    if (password.value.length < 6) {
        setError(password, "Minimum 6 characters");
    } else if (!/[A-Z]/.test(password.value)) {
        setError(password, "One uppercase letter required");
    } else if (!/[0-9]/.test(password.value)) {
        setError(password, "One number required");
    } else {
        setSuccess(password);
    }
}

// Confirm password
function validateConfirmPassword() {
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirmPassword");

    if (confirm.value !== password.value || confirm.value === "") {
        setError(confirm, "Passwords do not match");
    } else {
        setSuccess(confirm);
    }
}
