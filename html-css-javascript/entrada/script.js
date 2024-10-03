const inputEmail = document.getElementById("email");
const inputPass = document.getElementById("password");
const btnShow = document.getElementById("btn");
const divResultados = document.getElementById("resultados")

const dataUser = {
    email: "",
    password: ""
};


function handleChange({ target }) {
    const { name, value } = target;
    dataUser[name] = value;

    console.log(name, value)
}

inputEmail.addEventListener("change", handleChange);
inputPass.addEventListener("change", handleChange);

btnShow.addEventListener('click', () => {
    console.log(dataUser)
});


async function getAPI() {
    const req = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=computador");
    const res = await req.json();

    divResultados.innerHTML += `
        <h3>${res.results[0].title}</h3>
        <img src="${res.results[0].thumbnail}" />
    `
}

getAPI();
