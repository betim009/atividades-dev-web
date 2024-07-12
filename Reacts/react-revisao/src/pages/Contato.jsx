import { useState } from "react";
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';

function Contato() {
  const [valorInicial, setValorInicial] = useState("Fábio");

  return (
    <>
      <NavBar />
      <Container>
        <h2>Página de Contato</h2>
        <Form>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control placeholder="Digite seu email" />
          </Form.Group>
          <Button>Enviar</Button>
        </Form>
      </Container>
    </>
  );
}

export default Contato;
