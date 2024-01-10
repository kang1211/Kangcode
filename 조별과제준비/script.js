function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Add your login logic here
    console.log("Login:", username, password);
}

function signup() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;

    // Add your signup logic here
    console.log("Signup:", username, password);
}

function toggleForm() {
    var loginForm = document.querySelector(".login-form-container");
    var signupForm = document.querySelector(".signup-form-container");

    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
}

// Initially, hide the signup form
toggleForm();
