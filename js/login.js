//step-1: add click handler with the submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside th input field
      //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //Danger do not do this for the same purpose but for learning
    //step-4:verify email and password
    if(email === 'samiha@baap.com' && password === 'secret'){
        window.location.href ='bank.html';
    }
    else{
        alert('your password or gmail is incorrect');
    }
})