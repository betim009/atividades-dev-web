import Header from "../components/Header";
import Menu from "../components/Menu";

function Contato() {
  return (
    <>
      <Header />
      <div className="flex">
        <Menu />
        <div>
          <h1>Pagina de Contato</h1>
          <input type="text" placeholder="enviar mensagem" />
        </div>
      </div>
    </>
  );
}

export default Contato;
