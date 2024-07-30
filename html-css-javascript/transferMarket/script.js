import { dados } from "./dados.js";

const tbodyTimes = document.getElementById('tbody-times');


// ESTRUTURA DE REPETIÇÃO QUE CRIA OS ELEMENTOS
for (const time of dados) {
    tbodyTimes.innerHTML += `
        <tr class="${time.markClass}">
            <td>${time.rank}</td>
            <td>${time.clubName}</td>
        </tr>
    `
}