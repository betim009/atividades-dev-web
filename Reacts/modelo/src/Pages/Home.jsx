import { useEffect, useState } from "react";
import BtnPrimary from "../Components/BtnPrimary";
import Header from "../Components/Header";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      const req = await fetch(
        "https://api.mercadolibre.com/sites/MLB/search?q=computador"
      );
      const res = await req.json();

      setData(res.results);
    }

    fetchApi();
  }, []);

  return (
    <div>
      <Header />

      {data === null
        ? "loding"
        : data.map((element, index) => (
            <div key={index}>
              <h2>{element.title}</h2>
              <img src={element.thumbnail} alt="" />
            </div>
          ))}

      <BtnPrimary>Enviar</BtnPrimary>
      <BtnPrimary>Exibir</BtnPrimary>
    </div>
  );
}
