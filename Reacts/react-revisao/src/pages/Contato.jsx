import { useContext } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";

function Contato() {
  const { usuario, contador } = useContext(Context);

  return (
    <>
      <Link to="/">Voltar</Link>
      <h2>Pagina de Contato</h2>
      <p>{usuario} - {contador}</p>

    </>
  );
}

export default Contato;
