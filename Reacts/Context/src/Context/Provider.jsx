import { useState } from "react";
import Context from "./Context";

export default function Provider({ children }) {
  const [usuario, setUsuario] = useState("Alberto");
  const [valorTotal, setValorTotal] = useState(0);

  const contextValue = {
    usuario,
    setUsuario,
    valorTotal,
    setValorTotal
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
