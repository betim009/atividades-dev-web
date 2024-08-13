import { dados } from "./dadosChampions.js";

for (const element of dados) {
    console.log(element.name);
};

console.log("-------------------- SEPARAR -------------------------");

dados.map(element => console.log(element.name));

console.log("-------------------- SEPARAR -------------------------");

for (let index = 7; index >= 0; index--) {
    const element = dados[index];
    console.log(element.name)
};