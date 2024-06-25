import { processadores14GeracaoIntel } from "./data.js";

const tBody = document.getElementById('tbody');

processadores14GeracaoIntel.map((element, index) => tBody.innerHTML += `
    <tr>
        <td>
            <img src="${element.img}" />
        </td>
        <td>${element.nome}</td>
        <td>${element.geracao}</td>
        <td>${element.preco}</td>
    </tr>
`);