/*
Os seletores é a forma de resgatar um elemento do HTML para o javascript.
Através dos seletores, conseguimos inserir dados e elementos dentro desses elementos.

podemos buscar por ID, CLASSE, E QUERY SELECTOR

querySelector de id = #
querySelector de classe = .

Quando busco um seletor por ID -> estou buscando apenas 1 elemento
Quando busco por classe -> estou buscando por varios elementos

*/
const seletorById = document.getElementById('s-id');
const seletorByClassName = document.getElementsByClassName('s-class');

const seletorQueryId = document.querySelector('#sq-id');
const querySelectorAll = document.querySelectorAll('.sq-class');


console.log('Seletor por id:', seletorById);
console.log('Seletor por classe:', seletorByClassName);
console.log('Seletor query id:', seletorQueryId);
console.log('Seletor query class:', querySelectorAll);