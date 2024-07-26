/*
    data é um array de objetos
    as chaves do objeto são nome, idade e cidade

    o primeiro objeto é o alberto
    o segundo é leticia
*/
const data = [
    {       
        nome: "Alberto",
        idade: 29,
        cidade: "Ibatiba"
    },
    {
        nome: "Leticia",
        idade: 21,
        cidade: "Ibatiba"
    }
];


/*
 divResultado é uma variavel que armazena uma div que esta criada no html
 isso se chama SELETOR
 estou buscando essa div pelo id
*/
const divResultado = document.getElementById('resultado');



/*
map é uma estrutura de repetição, que estou usando para criar os elementos
da minha base de dados.
no caso estou criando uma nova div e um h3 dentro da divResultado.

a sintaxe do map é:
array.map(() => {});

innerHTML é necessário para criar os elementos dentro da div.
o += é para criar mais de 1 elemento.

é necessário usar a crase não aspas para conseguir misturar html e javascript
`${element.nome} por exemplo`
*/
data.map((element, index) => divResultado.innerHTML += `
    <div> 
        <h3>${element.nome} ${element.idade} ${element.cidade}</h3>
    </div>
`);


/*
fiz mais uma vez um map.
Mas dessa vez utilizando o método com createElement.
criei uma constante chamada newDiv e armazenei uma nova div dentro dela.
usando innerHTML coloquei dentro da newDiv um h3
e depois coloquei dentro da divResultado
*/


data.map((element, index) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML += `<h3>${element.nome} ${element.idade} ${element.cidade}</h3>`;
    divResultado.appendChild(newDiv);
});