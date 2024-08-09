import ListElements from "./components/ListElements"
import { naruto } from "./data"



function Naruto() {
    return (
        <div>
            <ListElements items={naruto} />
        </div>
    )
}

export default Naruto