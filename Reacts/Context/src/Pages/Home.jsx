import { useContext, useEffect } from "react";
import Context from "../Context/Context";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState({
    produto: "Produto A",
    preco: 15.99,
  });

  const { usuario, valorTotal, setValorTotal } = useContext(Context);

  // Recuperar o valor do localStorage ao carregar a página
  useEffect(() => {
    const valorSalvo = localStorage.getItem("valorTotal");
    if (valorSalvo) {
      setValorTotal(valorSalvo);
    }
  }, [setValorTotal]);

  function handleClickRemove() {
    if (valorTotal <= 0) {
      return;
    }
    const novoValor = (parseFloat(valorTotal) - data.preco).toFixed(2);
    setValorTotal(novoValor);
    localStorage.setItem("valorTotal", novoValor); // Salvar no localStorage
  }

  function handleClickInsert() {
    const novoValor = (parseFloat(valorTotal) + parseFloat(data.preco)).toFixed(
      2
    );
    setValorTotal(novoValor);
    localStorage.setItem("valorTotal", novoValor); // Salvar no localStorage
  }

  return (
    <div>
      <h2>Seja bem vindo {usuario}</h2>
      <p>{data.produto}</p>
      <p>{data.preco}</p>
      <h4>Valor total do carrinho: {valorTotal}</h4>
      <button onClick={handleClickRemove}>-</button>
      <button onClick={handleClickInsert}>+</button>
      <Link to="/cart">Carrinho</Link>
    </div>
  );
}
