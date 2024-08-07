import { useContext } from "react";
import Context from "./context/Context";

function Titles() {
  const { valor, setValor } = useContext(Context);

  return <>
    {valor}
  </>;
}

export default Titles;
