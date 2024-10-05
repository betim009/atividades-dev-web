// importações


// seletores
const inputTitulo = document.getElementById('input-titulo');
const inputValor = document.getElementById('input-valor');
const inputDate = document.getElementById('input-date');
const inputStatus = document.getElementById('input-status');
const inputLocal = document.getElementById('input-local');
const btnEnviar = document.getElementById('btn-enviar');

// variaveis
const data = {
    titulo: "",
    valor: "",
    date: "",
    status: "",
    local: ""
};

const chamados = [];

// funcoes
function handleChange({ target }) {
    const { name, value } = target;
    data[name] = value;
};


// eventos
inputTitulo.addEventListener('input', handleChange);
inputValor.addEventListener('input', handleChange);
inputDate.addEventListener('input', handleChange);
inputStatus.addEventListener('input', handleChange);
inputLocal.addEventListener('input', handleChange);

btnEnviar.addEventListener('click', () => {
    if (!data.titulo.trim()) {
        return alert("")
    };

    chamados.push(data);
    console.log(chamados)
});