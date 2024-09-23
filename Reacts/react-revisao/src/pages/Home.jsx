import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";

function Home() {
  const { usuario, contador, setContador } = useContext(Context);
  const [habiltado, setHabilitado] = useState(false);

  function handleClick() {
    setContador(contador + 1);

    if (contador + 1 >= 10) {
      setHabilitado(true);
    }
  }

  return (
    <>
      <h2>Pagina de Home</h2>
      <Link to="/contato">Pagina de Contato</Link>
      <p>Bem vindo {usuario}</p>

      <p>Contador: {contador}</p>
      <button disabled={habiltado} onClick={() => handleClick()}>
        +
      </button>
    </>
  );
}

export default Home;
