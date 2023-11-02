document.addEventListener('DOMContentLoaded', function () { 
const contactForm = document.getElementById('contact-form'); 
const errorMessage = document.getElementById('error-message'); 
 
 contactForm.addEventListener('submit', function (e) { 
e.preventDefault(); 
 
 // Reset error message
 errorMessage.textContent = ''; 
 
 // Get form input values const name =
contactForm.querySelector('#name').value; const email =
contactForm.querySelector('#email').value; const message =
contactForm.querySelector('#message').value; 
 
 // Email validation using a regular expression
 const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
 
 if (!email.match(emailRegex)) { 
 errorMessage.textContent = 'Please enter a valid email address.'; 
return; 
 } 
 
 console.log('Name:', name); 
 console.log('Email:', email); 
 console.log('Message:', message); 
 
 // Reset form fields
 contactForm.reset(); 
 }); 
 }); 