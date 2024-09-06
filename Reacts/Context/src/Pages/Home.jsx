import { useContext } from "react";
import Context from "../Context/Context";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Home() {
  const [data, setData] = useState({
    produto: "Produto A",
    preco: 15.99,
  });

  const { usuario, valorTotal } = useContext(Context);
  const { insert, remove } = useCart(data.preco);

  return (
    <div>
      <h2>Seja bem vindo {usuario}</h2>
      <p>{data.produto}</p>
      <p>{data.preco}</p>
      <h4>Valor total do carrinho: {valorTotal}</h4>
      <button onClick={remove}>-</button>
      <button onClick={insert}>+</button>
      <Link to="/cart">Carrinho</Link>
    </div>
  );
}
