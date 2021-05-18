function logIn() {

}

function getUser(user) {
    const userInfo = localStorage['users'].split(';');
    for (value of userInfo.slice(0, this.length - 1)) {
        if (value.split(',')[3] === user) {
            return value;
        } 
    }
    return null;
}


function signUp() {
    const first = document.getElementById('firstname');
    const last = document.getElementById('lastname');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const rePassword = document.getElementById('re-password');
    
    if (getUser(username.value)) {
        alert("error");
    } else if (password.value !== rePassword.value) {
        alert("error");
    } else {
        const userString = `${first.value},${last.value},${email.value},${username.value},${password.value},${rePassword.value};`;
        localStorage['users'] = localStorage['users'] + userString;
    }
}

function logOut() {
    
}

function storageInit() {
    if (localStorage['users'] === undefined) {
        localStorage['users'] = '';
    }
}

function renderHomeView() {
    storageInit();
    const body = document.querySelector('body');
    body.innerHTML = 
    `    
    <h2>Welcome</h2>
    <p>Please log in below or create a new account</p>
    <label for="username">Username</label>
    <input id="username" type="text" autocomplete="off"/>
    <label for="password">Password</label>
    <input id="password" type="password" autocomplete="off"/>
    <button onclick="logIn()">Log In</button>
    <p>New here?</p>
    <button onclick="renderSignUpForm()">Sign Up</button>
    `
}

function renderLoggedInView() {

}

function renderLoggedOutView() {

}

function renderSignUpForm() {
    const body = document.querySelector('body');
    body.innerHTML = 
    `    
    <h2>Sign Up For This Awesome App</h2>
    <p>Fill out the form and click 'Sign Up'</p>
    <label for="firstname">First Name:</label>
    <input id="firstname" type="text" autocomplete="off"/>    
    <label for="lastname">Last Name:</label>
    <input id="lastname" type="text" autocomplete="off"/>
    <label for="email">Email:</label>
    <input id="email" type="text" autocomplete="off"/>
    <label for="username">Username:</label>
    <input id="username" type="text" autocomplete="off"/>    
    <label for="password">Password:</label>
    <input id="password" type="password" autocomplete="off"/>
    <label for="password">Reenter Password:</label>
    <input id="re-password" type="password" autocomplete="off"/>
    <button onclick="signUp()">Sign Up</button>
    <a href="" onclick="renderHomeView()">Back</a>
    `    
}

function renderSignUpSuccess() {

}

function renderSignUpFailure() {

}

renderHomeView()
