document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('submit-email');
    const userEmail = emailField.value;
    // console.log(userEmail)
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword)

    if (userEmail == 'apple@gmail.com' && userPassword == 'apple') {
        console.log('valid user');
        window.location.href='banking.html '
    }


})