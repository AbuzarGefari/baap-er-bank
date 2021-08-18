document.getElementById('login-btn').addEventListener('click',function(){
    const emailField = document.getElementById('submit-email')
    const userEmail = emailField.value;
    console.log(userEmail)
    const emailPassword = document.getElementById('user-password')
    const userPassword = emailPassword.value;
    console.log(userPassword)

    if (userEmail == 'evilboy@gmail.com' && userPassword == 'apple') {
        console.log('vaild User')
    }
    window.location.href='banking.html'
})