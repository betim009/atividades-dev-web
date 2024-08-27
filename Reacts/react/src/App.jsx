import { useEffect, useState } from "react";

function App() {
  const [moedas, setMoedas] = useState(null);
  const [brl, setBrl] = useState(0);
  const [usd, setUsd] = useState(0);
  const [input1, setInput1] = useState(0);
  const [valorCovertido, setValorConvertido] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const url =
        "https://currencyapi-net.p.rapidapi.com/rates?output=JSON&base=USD";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "27bb0a1793msh18efee95ca561adp17c14ejsnb2b78c9d3300",
          "x-rapidapi-host": "currencyapi-net.p.rapidapi.com",
        },
      };

      const req = await fetch(url, options); // PEDIDO PARA O GARÇON
      const res = await req.json(); // A RESPOSTA DO GARÇON

      console.log(res) // VEJA NO CONSOLE A RESPOSTA

      setMoedas(res.rates);
      setBrl(res.rates.BRL / res.rates.BRL)  // O valor BRL divido por BRL 5.9/5.9 = 1
      setUsd(res.rates.BRL) // 1 USD = 5.9 BRL logo 1 BRL = 5.9
    }

    // EXECUTANDO a FUNÇÃO
    fetchApi();
  }, []);

  
  if (moedas === null || brl === null || usd === null) {
    return <span>Loading</span>;
  }

  return (
    <>
      <p>Valor do brl {brl}</p>
      <p>Valor do dolar {usd}</p>

      <input type="number" placeholder="BRL" onChange={({target}) => setInput1(target.value)}/>
      
      <p>Valor convertido {valorCovertido}</p>

      <br />
      <button onClick={() => setValorConvertido(input1 * usd.toFixed(2))}>Calcular</button>
    </>
  );
}

export default App;
