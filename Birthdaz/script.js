// Replace 'your_password' with the actual password
const correctPassword = 'Sommartider';

function checkPassword() {
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Redirect to chatgpt.html if the password is correct
        window.location.href = 'chatgpt.html';
    } else {
        // Display an error message
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}
