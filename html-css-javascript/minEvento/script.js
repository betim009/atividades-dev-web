let inputEmail = document.getElementById("input-email");
let inputPassword = document.getElementById("input-password");
let resultado = document.getElementById("resultado");
let btnSend = document.getElementById("btn-send");

let email = "";
let pass = "";

inputEmail.addEventListener('input', (event) => {
    email = event.target.value;
});

inputPassword.addEventListener('input', (event) => {
    pass = event.target.value;
});

btnSend.addEventListener('click', (event) => {
    alert(email + pass);
});