import { useEffect, useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [usuario, setUsuario] = useState("Alberto");
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    const valorSalvo = localStorage.getItem("valorTotal", valorTotal);
    if (valorSalvo) {
      setValorTotal(valorSalvo);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("valorTotal", valorTotal);
  }, [valorTotal]);

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
