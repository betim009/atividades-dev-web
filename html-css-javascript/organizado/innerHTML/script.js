/*
    pResultado é um seletor que esta buscando no html um paragrafo
    estou usando o innerHTML para insirir dentro do paragrafo a string 'Olá Mundo'
*/
const pResultado = document.getElementById('resultado');
pResultado.innerHTML = "Olá Mundo";


/*
    Fiz a mesma coisa do exemplo acima, porem usando o método textContent
    a diferença do textContent para o innerHtml é que o inner é capaz de colocar qualquer coisa
    dentro de um html, não apenas texto.
*/
const h2Resultado = document.getElementById('resultado-1');
h2Resultado.textContent = "Olá Mundo 2";


/*
    Resgatei o body e armazenei ele dentro de uma constante chamada body também.
    criei uma nova constante chamada newDiv e crei uma div com a função createElement().
    dentro da newDiv usando innerHTML criei uma paragrafo.
    depois é NECESSÁRIO colocar a newDiv dentro de algum elemento.
    Coloquei a newDiv dentro do body, utilizando appendChild().
    Se eu não usar appendChild() não vai exibir nada na tela. É OBRIGATORIO

*/
const body = document.body;
const newDiv = document.createElement('div');
newDiv.innerHTML += "<p> Olá mais uma vez </p>";
body.appendChild(newDiv);