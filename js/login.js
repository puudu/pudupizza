let users = [];
let currentUser = {
    email: null,
    fullname: null,
    username: null,
    password: null
};

document.addEventListener('DOMContentLoaded', () => {
    users = JSON.parse(localStorage.getItem('users')) || [];
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    saveUsersToStorage();
    saveCurrentUserToStorage();
}) // Lee el elemento users y currentUser luego de que el dom es cargado

// Functions

function registerUser(){
    const email = document.getElementById('regis-email');
    const fullname = document.getElementById('regis-fullname');
    const username = document.getElementById('regis-username');
    const password = document.getElementById('regis-password');
    const c_password = document.getElementById('regis-c_password');
    
    console.log(password.value + " === " + c_password.value);

    if (password.value !== c_password.value){
        alert("Las contraseñas ingresadas no coinciden");
        return;
    }

    const newUserData = {
        email: email.value,
        fullname: fullname.value,
        username: username.value,
        password: password.value
    }

    const exist = users.some(user => user.username === newUserData.username);

    if (exist){
        alert("Nombre de usuario ya registrado, ingrese otro nombre de usuario");
        return;
    }
    else{
        users.push(newUserData);
        console.log(users);
    }
    saveUsersToStorage();
    alert("Usuario registrado con éxito.")
    window.location = "login.html";
}

function logIn(){
    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');

    console.log(username.value + " " + password.value);
    
    // busca al usuario en localStorage
    const user = users.find(user => user.username === username.value);

    console.log(user);

    if(user === undefined){
        alert("El usuario no existe.");
    }
    else{
        if (password.value === user.password){
            currentUser = user;
            saveCurrentUserToStorage();
            alert("Bienvenido " + currentUser.username);
            window.location = "index.html";
        }
        else{
            alert("La contraseña no es correcta. Vuelva a intentarlo.");
        }
    }
}

function newPassword(){
    const email = document.getElementById('recover-email');
    const newPassword = document.getElementById('recover-newPassword');
    const cPassword = document.getElementById('recover-cPassword');

    // busca al usuario en localStorage
    const user = users.find(user => user.email === email.value);

    console.log(user);

    if(user === undefined){
        alert("No existe un usuario registrado con el correo ingresado.");
    }
    else{
        if (newPassword.value === cPassword.value){
            console.log("passwords coincidentes");
            for (const u of users){
                console.log(u);
                if (u.username === user.username){
                    u.password = newPassword.value;
                    saveUsersToStorage();
                    alert("Hola " + user.username + ". Tu contraseña se ha reestablecido con éxito.");
                    window.location = "login.html";
                    return;
                }
            }
        }
        else{
            alert("Las contraseñas no coinciden. Vuelva a intentarlo.");
        }
    }
}

function saveUsersToStorage()
{
    localStorage.setItem("users", JSON.stringify(users));
}

function saveCurrentUserToStorage()
{
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const button = document.getElementById('button');
// 
button.addEventListener('click', (e) =>{
    e.preventDefault();
})