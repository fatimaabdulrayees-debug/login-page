document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Demo login details
    if (email === "admin@gmail.com" && password === "12345") {

        message.textContent = "Login successful!";
        message.style.color = "green";

    } else {

        message.textContent = "Invalid email or password!";
        message.style.color = "red";

    }
});