import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null); // Dados da busca inicial
  const [inputQuery, setInputQuery] = useState(""); // Valor do input do usuário
  const [searchResults, setSearchResults] = useState(null); // Dados da busca com a query

  useEffect(() => {
    // Função para fetch inicial
    const fetchInitialData = async () => {
      const endPoint =
        "https://api.mercadolibre.com/sites/MLB/search?q=computador";
      try {
        const req = await fetch(endPoint);
        const res = await req.json();
        setData(res); // Dados da busca inicial
      } catch (error) {
        console.error("Erro ao buscar dados iniciais:", error);
      }
    };

    fetchInitialData();
  }, []); // Executa apenas uma vez na montagem

  // Função para fetch baseado na query
  const fetchApiQuery = async () => {
    if (inputQuery === "") return; // Evita buscar dados se a query estiver vazia

    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${inputQuery}`;
    try {
      const req = await fetch(endPoint);
      const res = await req.json();
      setSearchResults(res); // Atualiza `searchResults` com a resposta da requisição
    } catch (error) {
      console.error("Erro ao buscar dados com a query:", error);
    }
  };

  // Função chamada ao clicar no botão
  const handleClick = () => {
    fetchApiQuery(); // Dispara a busca com a query atual
  };

  useEffect(() => {
    console.log("Dados iniciais:", data);
    console.log("Resultados da busca com a query:", searchResults);
  }, [data, searchResults]);

  return (
    <>
      <h2>Olá mundo</h2>

      <p>Resultado da busca inicial: {data && JSON.stringify(data.query)}</p>

      <p>
        Resultado da pesquisa do input:{" "}
        {searchResults && JSON.stringify(searchResults.query)}
      </p>

      <label htmlFor="inputQuery">Pesquise:</label>
      <input
        type="text"
        placeholder="query"
        value={inputQuery}
        id="inputQuery"
        onChange={({ target }) => setInputQuery(target.value)} // Atualiza o estado do input
      />
      <button onClick={handleClick}>Buscar</button>
    </>
  );
}

export default App;
