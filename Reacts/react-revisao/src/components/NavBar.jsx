import { data } from "../data/genres";
import Container from "react-bootstrap/Container";
function NavBar() {
  return (
    <Container>
      <nav>
        <ul>
          {data.map((element, index) => (
            <li key={index}>
              <a href="#">{element._id}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default NavBar;
