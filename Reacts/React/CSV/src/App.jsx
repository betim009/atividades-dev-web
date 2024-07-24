import { useEffect, useState } from "react";
import "./App.css";
import Papa from "papaparse";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formValues, setFormValues] = useState({
    usuario: "",
    idade: "",
    profissão: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setSelectedItem(item);
    setFormValues(item);
    setShow(true);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => setData(results.data),
      error: (error) => {
        console.error("Error parsing CSV:", error);
      },
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    const updatedData = data.map((item) =>
      item.usuario === selectedItem.usuario ? formValues : item
    );
    setData(updatedData);
    handleClose();
  };

  const handleDownloadCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Idade</th>
            <th>Profissão</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.usuario} onClick={() => handleShow(e)}>
              <td>{e.usuario}</td>
              <td>{e.idade}</td>
              <td>{e["profissão"]}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="usuario"
            value={formValues.usuario}
            onChange={handleInputChange}
            placeholder="Alterar nome do usuario"
          />
          <input
            type="text"
            name="idade"
            value={formValues.idade}
            onChange={handleInputChange}
            placeholder="Alterar idade"
          />
          <input
            type="text"
            name="profissão"
            value={formValues["profissão"]}
            onChange={handleInputChange}
            placeholder="Alterar profissão"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>

      <Button onClick={handleDownloadCSV}>Salvar no CSV</Button>
    </div>
  );
}

export default App;
