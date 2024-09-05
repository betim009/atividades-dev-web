import { useContext } from "react";
import Context from "../Context/Context";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const [data, setData] = useState({
    produto: "Produto A",
    preco: 15.99,
  });

  const { usuario, valorTotal, setValorTotal } = useContext(Context);

  function handleClickRemove() {
    if (valorTotal <= 0) {
      return null;
    }
    setValorTotal((valorTotal - data.preco).toFixed(2));
  }

  function handleClickInsert() {
    const soma = parseFloat(valorTotal) + parseFloat(data.preco);
    const resultado = soma.toFixed(2);
    setValorTotal(resultado);
  }

  return (
    <div>
      <h2>Seja bem vindo {usuario}</h2>

      <p>{data.produto}</p>
      <p>{data.preco}</p>
      <h4>Valor total do carrinho: {valorTotal}</h4>
      <button onClick={handleClickRemove}>-</button>
      <button onClick={handleClickInsert}>+</button>

      <Link to='/cart'>
        Carrinho
      </Link>
    </div>
  );
}
