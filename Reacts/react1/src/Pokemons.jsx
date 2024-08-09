import ListElements from "./components/ListElements"
import { pokemons } from "./data"


function Pokemons() {
    return (
        <div>
            <ListElements items={pokemons} />
        </div>
    )
}

export default Pokemons