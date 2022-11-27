let users = [];
let currentUser = null;
const loginPage = document.querySelector("#login");
const currentUserDisplay = document.querySelector("#currentUserDisplay");
const loginPaymentProcess = document.querySelector("#payment-process");
document.addEventListener("DOMContentLoaded", ()=>{
    users = JSON.parse(localStorage.getItem("users")) || [];
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    saveUsersToStorage();
    saveCurrentUserToStorage();
}) // Lee el elemento users y currentUser luego de que el dom es cargado
;
if (loginPage) button.addEventListener("click", (e)=>{
    e.preventDefault();
});
if (currentUserDisplay) {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser == null) currentUserDisplay.innerHTML = '<i class="fa-solid fa-user"></i><br>Invitado';
    else currentUserDisplay.innerHTML = '<i class="fa-solid fa-user"></i><br>' + currentUser.username;
}
if (loginPaymentProcess && currentUser != null) {
    const _cliente = document.getElementById("cliente");
    const _correo = document.getElementById("correo");
    _cliente.value = currentUser.fullname;
    _correo.value = currentUser.email;
    _cliente.setAttribute("disabled", "");
    _correo.setAttribute("disabled", "");
}
// Functions
function registerUser() {
    const email = document.getElementById("regis-email");
    const fullname = document.getElementById("regis-fullname");
    const username = document.getElementById("regis-username");
    const password1 = document.getElementById("regis-password");
    const c_password = document.getElementById("regis-c_password");
    console.log(password1.value + " === " + c_password.value);
    if (password1.value !== c_password.value) {
        alert("Las contrase\xf1as ingresadas no coinciden");
        return;
    }
    if (checkPassword(password1.value) == false) {
        alert("La contrase\xf1a no cumple los requisitos. La contrase\xf1a debe contener al menos 8 caracteres, may\xfasculas, min\xfasculas y n\xfameros.");
        return;
    }
    const newUserData = {
        email: email.value,
        fullname: fullname.value,
        username: username.value,
        password: password1.value
    };
    const userNameExist = users.some((user)=>user.username === newUserData.username);
    const emailExist = users.some((user)=>user.email === newUserData.email);
    if (userNameExist) {
        alert("Nombre de usuario ya registrado, ingrese otro nombre de usuario.");
        return;
    } else if (emailExist) {
        alert("Correo ya registrado, ingrese otro correo.");
        return;
    } else {
        users.push(newUserData);
        console.log(users);
    }
    saveUsersToStorage();
    alert("Usuario registrado con \xe9xito.");
    window.location = "login.html";
}
function logIn() {
    const username = document.getElementById("login-username");
    const password1 = document.getElementById("login-password");
    console.log(username.value + " " + password1.value);
    // busca al usuario en localStorage
    const user = users.find((user)=>user.username === username.value);
    console.log(user);
    if (user === undefined) alert("El usuario no existe.");
    else if (password1.value === user.password) {
        currentUser = user;
        saveCurrentUserToStorage();
        alert("Bienvenido " + currentUser.username);
        window.location = "index.html";
    } else alert("La contrase\xf1a no es correcta. Vuelva a intentarlo.");
}
function newPassword() {
    const email = document.getElementById("recover-email");
    const newPassword = document.getElementById("recover-newPassword");
    const cPassword = document.getElementById("recover-cPassword");
    // busca al usuario en localStorage
    const user = users.find((user)=>user.email === email.value);
    console.log(user);
    if (user === undefined) alert("No existe un usuario registrado con el correo ingresado.");
    else if (newPassword.value === cPassword.value) {
        if (checkPassword(password.value) == false) {
            alert("La contrase\xf1a no cumple los requisitos. La contrase\xf1a debe contener al menos 8 caracteres, may\xfasculas, min\xfasculas y n\xfameros.");
            return;
        }
        console.log("passwords coincidentes");
        for (const u of users){
            console.log(u);
            if (u.username === user.username) {
                u.password = newPassword.value;
                saveUsersToStorage();
                alert("Hola " + user.username + ". Tu contrase\xf1a se ha reestablecido con \xe9xito.");
                window.location = "login.html";
                return;
            }
        }
    } else alert("Las contrase\xf1as no coinciden. Vuelva a intentarlo.");
}
function logOut() {
    currentUser = null;
    saveCurrentUserToStorage();
}
function checkPassword(password1) {
    // Requerimientos password: 1 MAYUSCULA, 1 minuscula, 1 numero, minimo 8 caracteres
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return pattern.test(password1);
}
function saveUsersToStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}
function saveCurrentUserToStorage() {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

//# sourceMappingURL=index.16070edf.js.map
