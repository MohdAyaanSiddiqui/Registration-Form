function clearError(errorId) {
    document.getElementById(errorId).textContent = '';
}

function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Get form values ->
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Name validation->
    if (name.length < 5) {
        document.getElementById('nameError').textContent = 'Name must be at least 5 characters long';
        isValid = false;
    }

    // Email validation->
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Phone validation->
    if (phone === '1234567890' || !/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
        isValid = false;
    }

    // Password validation->
         if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
        isValid = false;
    } else if (password.toLowerCase() === 'password') {
        document.getElementById('passwordError').textContent = 'Password cannot be "password"';
        isValid = false;
    } else if (password.toLowerCase() === name.toLowerCase()) {
        document.getElementById('passwordError').textContent = 'Password cannot be your name';
        isValid = false;
    }

    // Confirm password validation->
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }

    return isValid;
}