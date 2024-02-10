const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthdate = document.getElementById('birthdate');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirmEmail');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function(event){
    event.preventDefault(); // Prevents form submission

    if(validateForm()) {
        //Form is valid, you can submit it
        alert('Form submitted successfully!')
    } else{
        //Form is not valid
        alert('Form validation failed');
    }

});

function validateForm(){
    let isValid = true;

    //Validate first name and last name
    if(!isValidName(firstName.value) || !isValidName(lastName.value)){
        alert('First name and last name should only contain letters and spaces');
        isValid = false;
    }

    //Validate email format
    if(!isValidEmail(email.value)){
        alert('Please enter a valid email address!');
        isValid = false;
    } else if(email.value !== confirmEmail.value){
        alert('Email confirmation does not match');
        isValid = false;
    }

    //Validate Password
    if(password.value.length < 8){
        alert('Password should be at least 8 characters long');
        isValid = false;
    } else if(password.value !== confirmPassword.value){
        alert('Password confirmation does not match');
        isValid = false;
    }
    
    return isValid;
}  

function isValidName(value){
    //check if the value contains only letters and spaces
    return /^[a-zA-Z\s]+$/.test(value);
}

function isValidEmail(value){
    //Simple email validation (checking for @ symbol)
    return value.includes('@');
}
