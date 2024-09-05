import { useContext } from "react";
import Context from "../Context/Context";

export default function Cart() {
  const { usuario, valorTotal } = useContext(Context);

  return (
    <div>
      <h2>Bem vindo {usuario} o valor do seu carrinho de compra é de {valorTotal}</h2>
    </div>
  );
}
