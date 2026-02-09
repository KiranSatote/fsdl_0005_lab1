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

function validateName() {
    let name = document.getElementById("name");
    if (name.value.length < 3) {
        setError(name, "Minimum 3 characters required");
    } else {
        setSuccess(name);
    }
    checkForm();
}

function validateEmail() {
    let email = document.getElementById("email");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email.value)) {
        setError(email, "Invalid email format");
    } else {
        setSuccess(email);
    }
    checkForm();
}

function validateAge() {
    let age = document.getElementById("age");
    if (age.value < 18 || age.value === "") {
        setError(age, "Age must be 18 or above");
    } else {
        setSuccess(age);
    }
    checkForm();

function validateConfirmPassword() {
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirmPassword");

    if (confirm.value !== password.value || confirm.value === "") {
        setError(confirm, "Passwords do not match");
    } else {
        setSuccess(confirm);
    }
    checkForm();
}

function validateTerms() {
    let terms = document.getElementById("terms");
    let error = document.getElementById("termsError");

    if (!terms.checked) {
        error.innerText = "You must accept terms & conditions";
        error.style.visibility = "visible";
    } else {
        error.style.visibility = "hidden";
    }
    checkForm();
}

function checkForm() {
    let inputs = document.querySelectorAll("input[type=text], input[type=password], input[type=number]");
    let terms = document.getElementById("terms").checked;
    let button = document.getElementById("submitBtn");

    for (let i of inputs) {
        if (!i.classList.contains("success")) {
            button.disabled = true;
            return;
        }
    }

    if (!terms) {
        button.disabled = true;
        return;
    }

    button.disabled = false;
}
    }
    checkForm();
}
}
    if (password.value.length < 6) {
        setSuccess(password);
        setError(password, "Minimum 6 characters");
        setError(password, "One number required");
    } else {
    } else if (!/[A-Z]/.test(password.value)) {
        setError(password, "One uppercase letter required");
    } else if (!/[0-9]/.test(password.value)) {

function validatePassword() {
    let password = document.getElementById("password");
