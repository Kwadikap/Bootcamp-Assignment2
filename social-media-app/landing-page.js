"use strict";

/* CODE FOR THE LANDING PAGE */
//log in object
const logInData = {
    username:"sally",
    password:"password"
};



// LOG IN COLOR HIGHLIGHT

const username = document.getElementById('username');
const password = document.getElementById('password');
const rightSide = document.getElementById('right-side');
const logInButton = document.getElementById('log-in-button');


//Hightlight username field
username.addEventListener('click', function() {
    password.style.borderColor = "var(--lightColor)";
    username.style.borderColor = "blue";
});


//hightlight password field
password.addEventListener('click', function() {
    username.style.borderColor = "var(--lightColor)";
    password.style.borderColor = "blue";
});


//check log in info
const checkLogInInfo = (checkUsername, checkPassword) => {
    if(checkUsername === logInData.username){
       
        if(checkPassword === logInData.password){
            return true;
        }
        
        return false;
    }

    return false;
}


//logs you in or redirects you
logInButton.addEventListener('click', function () {
    const usernameInput = username.value;
    const passwordInput = password.value;
    
    const allowSignIn = checkLogInInfo(usernameInput, passwordInput);

    if(allowSignIn){
        logInButton.href = "./index.html";
    }
    else {
        alert("Incorrect Username or Password!\n Try again!");
    }
});



// CODE FOR CREATING ACCOUNT

// CREATE VARIABLES NEEDED
// CREATE ACCOUNT BUTTON
const createAccount = document.querySelector('.create-account-button');
// MODAL WINDOW OUTTER 
const modalWindowOutter = document.querySelector('.modal-outter');
// CLOSE OUTTER MODAL WINDOW
const closeModalWindowOutter = document.querySelector('.close-button');
//SIGN UP BUTTON
const signupButton = document.querySelector('.sign-up-button');
//VERY EMAIL WINDOW
const verifyEmailWindow = document.querySelector('.verify-email-window');
// VERIFY EMAIL BACK BUTTON
const verifyEmailBackButton = document.querySelector('.verify-email-back-button');



// FUNCTION THAT HIDES SIGNUP POP UP WINDOW
const hideSigninPopup = () => {
    modalWindowOutter.style.display = 'none';
}


// FUNCTION THAT DISPLAYS SIGNUP POP UP WINDOW
const displaySigninPopup = () => {
    modalWindowOutter.style.display = 'inline';
}

// DISPLAY VERIFY EMAIL PAGE
const displayVerifyEmailWindow = () => {
    verifyEmailWindow.style.display = 'inline';
}

// HIDE VERIFY EMAIL PAGE
const hideVerifyEmailWindow = () => {
    verifyEmailWindow.style.display = 'none';
}




// CREATE ACCOUNT BUTTON FUNCTIONALITY

// EMPTY INPUT FIELDS
const clearInputFields = () => {
    document.querySelector('.first-name').value = '';
    document.querySelector('.first-name').style.borderColor = 'var(--grayColor)';
    document.querySelector('.first-name').style.borderWidth = '1px';
    
    document.querySelector('.last-name').value = '';
    document.querySelector('.last-name').style.borderColor = 'var(--grayColor)';
    document.querySelector('.last-name').style.borderWidth = '1px';

    document.querySelector('.email').value = '';
    document.querySelector('.email').style.borderColor = 'var(--grayColor)';
    document.querySelector('.email').style.borderWidth = '1px';

    document.querySelector('.new-password').value = '';
    document.querySelector('.new-password').style.borderColor = 'var(--grayColor)';
    document.querySelector('.new-password').style.borderWidth = '1px';


    // UNCHECK ALL RADIO BOXES FOR GENDER SECTION
    document.getElementById("male-select").checked = false;
    document.getElementById("female-select").checked = false;
    
    // REMOVE RED BORDER AROUND BOX
    document.querySelector('.male-div').style.borderColor = 'var(--grayColor)';
    document.querySelector('.male-div').style.borderWidth = '1px';
   
    document.querySelector('.female-div').style.borderColor = 'var(--grayColor)';
    document.querySelector('.female-div').style.borderWidth = '1px';
}


// ADD EVENT LISTENER THAT POPS UP SIGN UP SCREEN ON CLICK
createAccount.addEventListener('click', function() {

    // DISPLAY SIGNUP POP-UP PAGE
    displaySigninPopup();

});

// HIDE SIGN UP POP-UP PAGE
closeModalWindowOutter.addEventListener('click', function(){
    
    hideSigninPopup();

    // EMPTY ALL INPUT FIELDS
    clearInputFields();

});

// GO BACK TO SIGN UP PAGE FROM VERIFY EMAIL PAGE
verifyEmailBackButton.addEventListener('click', function(){
        hideVerifyEmailWindow();
});

// FUNCTION THAT VALIDATES EMAIL
const validateEmail = (email) => {
    
    // VALID EMAIL FORMAT
    const emailFormat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(emailFormat.test(email)){
        console.log('valid email');
        return true;
    }
        console.log('invalid email');
        return false;
    

}


// STORE USER SIGN UP INFORMATION
const storeSignupInfo = () => {
   
    let proceed = true;

    // RETRIEVE FIRST NAME INPUT AND CHECK IF ITS EMPTY
    // IF EMPTY THEN HIGHLIGHT INPUT BOX IN RED
    const firstName = document.querySelector('.first-name');

    if(!(firstName.value)) {
        firstName.style.borderColor = 'red';
        firstName.style.borderWidth = '2px';
        proceed = false;
    }else{
        firstName.style.borderColor = 'var(--grayColor)';
        firstName.style.borderWidth = '1px';
    }



    const lastName = document.querySelector('.last-name');

    if(!(lastName.value)) {
        lastName.style.borderColor = 'red';
        lastName.style.borderWidth = '2px';
        proceed = false;
    }else{
        lastName.style.borderColor = 'var(--grayColor)';
        lastName.style.borderWidth = '1px';
    }




    const email = document.querySelector('.email');

    if(!(email.value) || !validateEmail(email.value)) {
        email.style.borderColor = 'red';
        email.style.borderWidth = '2px';
        proceed = false;
    }else{
        email.style.borderColor = 'var(--grayColor)';
        email.style.borderWidth = '1px';
    }

    // // VALIDATE EMAIL
    // if(!validateEmail(email))   proceed = false;



    const newPassword = document.querySelector('.new-password');

    if(!(newPassword.value)) {
        newPassword.style.borderColor = 'red';
        newPassword.style.borderWidth = '2px';
        proceed = false;
    }else{
        newPassword.style.borderColor = 'var(--grayColor)';
        newPassword.style.borderWidth = '1px';
    }




    const genderMale = document.getElementById('male-select');
    const genderFemale = document.getElementById('female-select');
    
    if(genderMale.checked === false && genderFemale.checked === false) {
        document.querySelector('.male-div').style.borderColor = 'red';
        document.querySelector('.male-div').style.borderWidth = '2px';
        

        document.querySelector('.female-div').style.borderColor = 'red';
        document.querySelector('.female-div').style.borderWidth = '2px';
       
        proceed = false;
    }else{
        document.querySelector('.male-div').style.borderColor = 'var(--grayColor)';
        document.querySelector('.male-div').style.borderWidth = '1px';

        document.querySelector('.female-div').style.borderColor = 'var(--grayColor)';
        document.querySelector('.female-div').style.borderWidth = '1px';
    }


    return proceed;
}




// CODE FOR SIGNING UP
signupButton.addEventListener('click', function(){

    let proceed = storeSignupInfo();
    
    if(proceed === true){
        displayVerifyEmailWindow();
    }
    

});



