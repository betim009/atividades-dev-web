import { useState } from "react";
import { dataBody, dataHeader } from "./data";

function App() {
  const [quantidade, setQuantidade] = useState(1);
  const [input, setInput] = useState(1);

  function handleClick(event) {
    event.preventDefault();

    setQuantidade(input);
  }

  return (
    <>
      <form>
        <label>Quantidade</label>
        <input
          type="number"
          value={input}
          id="inputQuantidade"
          onChange={({ target }) => console.log(target.value) + setInput(target.value)}
        />
        <button onClick={handleClick}>Calcular</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>{dataHeader.thead1}</th>
            <th>{dataHeader.thead2 * quantidade}</th>
            <th>{dataHeader.thead3 * quantidade}</th>
          </tr>
        </thead>

        <tbody>
          {dataBody.map((element, index) => (
            <tr key={index}>
              <td>{element.tbody1}</td>
              <td>{element.tbody2 * quantidade}</td>
              <td>{element.tbody3 * quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
