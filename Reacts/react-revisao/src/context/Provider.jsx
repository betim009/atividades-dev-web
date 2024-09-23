import Context from "./Context";
import { useState } from "react";

function Provider({ children }) {
  const [usuario, setUsuario] = useState("Alberto");
  const [contador, setContador] = useState(0);

  const contextValue = {
    usuario,
    setUsuario,
    contador,
    setContador,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;
