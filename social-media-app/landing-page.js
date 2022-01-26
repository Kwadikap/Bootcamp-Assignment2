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
})

