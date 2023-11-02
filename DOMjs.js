document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const greetingDiv = document.getElementById('greeting');
form.addEventListener('submit', function (e) {
e.preventDefault(); // Prevent the form from submitting and reloading the page
// Get the user's name and email input values
const name = nameInput.value;
const email = emailInput.value;
// Display a greeting message
greetingDiv.textContent = `Hello, ${name}! Your email address is ${email}.`;
greetingDiv.style.display = 'block';
// Clear the form
nameInput.value = '';
emailInput.value = '';
});
});
