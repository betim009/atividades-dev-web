import { useContext } from "react";
import Context from "../Context/Context";

export function useCart(value = 0) {
  const { valorTotal, setValorTotal } = useContext(Context);

  const insert = () => {
    setValorTotal((parseFloat(valorTotal) + value).toFixed(2));
    console.log(valorTotal);
  };
  const remove = () => {
    setValorTotal((parseFloat(valorTotal) - value).toFixed(2));
    console.log(valorTotal);
  };

  return { insert, remove };
}
