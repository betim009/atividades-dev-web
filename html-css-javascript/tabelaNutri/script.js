export const dataHeader = {
    thead1: "Calorias (valor energético)",
    thead2: 1431.0,
    thead3: 71.55,
};

export const dataBody = [
    {
        tbody1: "Carboidratos líquidos",
        tbody2: 0.0,
        tbody3: 0.0,
    },
    {
        tbody1: "Carboidratos",
        tbody2: 0.0,
        tbody3: 0.0,
    },
    {
        tbody1: "Proteinas",
        tbody2: 32.0,
        tbody3: 10.67,
    },
    {
        tbody1: "Gorduras totais",
        tbody2: 2.5,
        tbody3: 4.55,
    },
    {
        tbody1: "Gorduras saturadas",
        tbody2: 0.9,
        tbody3: 4.09,
    }
];


const tHead = document.getElementById('thead');
const tBody = document.getElementById('tbody');
const inputQtd = document.getElementById('inputQtd');
const btnCalcular = document.getElementById('btnCalcular');

tHead.innerHTML += `
    <tr>
        <th>${dataHeader.thead1}</th>
        <th>${dataHeader.thead2}</th>
        <th>${dataHeader.thead3}</th>
    </tr>
`

dataBody.map((element, index) => tBody.innerHTML += `
    <tr>
        <td>${element.tbody1}</td>
        <td>${element.tbody2}</td>
        <td>${element.tbody3}</td>
    </tr>
`);

btnCalcular.addEventListener('click', (event) => {
    event.preventDefault();
    tHead.innerHTML = "";

    tHead.innerHTML += `
    <tr>
        <th>${dataHeader.thead1}</th>
        <th>${dataHeader.thead2 * inputQtd.value}</th>
        <th>${dataHeader.thead3 * inputQtd.value}</th>
    </tr>
`
    tBody.innerHTML = "";
    dataBody.map((element, index) => tBody.innerHTML += `
    <tr>
        <td>${element.tbody1}</td>
        <td>${element.tbody2 * inputQtd.value}</td>
        <td>${element.tbody3 * inputQtd.value}</td>
    </tr>
`);
});