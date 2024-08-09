import { Link } from "react-router-dom";
import { naruto, pokemons } from "./data";


function Home() {
  return (
    <>
      <h2>Olá mundo</h2>

      <div>
        <h4>{naruto[0].Title}</h4>
        <img src={naruto[0].Poster} alt="" />
        <Link to="/naruto">Confira todos os filmes do Naruto</Link>
      </div>

      <div>
        <h4>{pokemons[0].Title}</h4>
        <img src={pokemons[0].Poster} alt="" />
        <Link to="/pokemons">Confira todos os filmes do Pokemon</Link>
      </div>
      
    </>
  );
}

export default Home;
