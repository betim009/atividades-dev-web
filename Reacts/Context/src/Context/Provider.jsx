import { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [usuario, setUsuario] = useState("Alberto");
  const [valorTotal, setValorTotal] = useState(0);

  const contextValue = {
    usuario,
    setUsuario,
    valorTotal,
    setValorTotal,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
