import Header from "../components/Header";
import Menu from "../components/Menu";

function Home() {
  return (
    <>
      <Header />

      <div className="flex">
        <Menu />
        <div>
          <h1>Pagina Home</h1>
          <table>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>

            <tr>
                <td>1</td>
                <td>Pedro</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
