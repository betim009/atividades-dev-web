// SELETORES
const email = document.getElementById('email');
const pass = document.getElementById('password');
const btn = document.getElementById('btn');


// VARIAVEIS GLOBAIS
const data = {
    userEmail: "",
    userPass: "",
};

email.addEventListener('change', (event) => {
    data.userEmail = target.value;
})

pass.addEventListener('change', (event) => {
    data.userPass = target.value;
})

btn.addEventListener('click', () => {
    console.log(data);
});