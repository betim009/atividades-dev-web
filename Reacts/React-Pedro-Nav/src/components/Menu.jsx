import { Link } from "react-router-dom"

function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    )
}

export default Menu