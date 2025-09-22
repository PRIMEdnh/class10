// Set a specific username and password
const correctUsername = "class10";
const correctPassword = "hompho";

// Track login attempts
let attempts = 0;
const maxAttempts = 4;

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsername && password === correctPassword){
        alert("WELCOME CHHOKRE!");
        window.location.href = "page1.html"; // Redirect to second page
    } else {
        attempts++;
        alert(`Incorrect username or password! Attempt ${attempts} of ${maxAttempts}`);
        
        if(attempts >= maxAttempts){
            alert("You have reached the maximum number of attempts. Login disabled.");
            loginBtn.disabled = true;
        }
    }
});




