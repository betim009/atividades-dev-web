// SELETORES
const email = document.getElementById('email');
const pass = document.getElementById('password');
const btn = document.getElementById('btn');


// VARIAVEIS GLOBAIS
const data = {
    userEmail: "",
    userPass: "",
};

function handleClick({ target }) {
    const { name, value } = target;
    data[name] = value;
}


email.addEventListener('change', handleClick)

pass.addEventListener('change', handleClick)

btn.addEventListener('click', () => {
    console.log(data);
});