import Button from "./components/button"
import ListItems from "./components/listItems"
import Title from "./components/title/Title"
import { grupoA, grupoB } from "./data/grupos"


function App() {




  return (
    <div>
      <h2>Olá</h2>
      <Title nome={"Bem vindo"} />
      <Button nome={"Clicar"}/>
      <Button nome={"Remover"}/>
      <ListItems array={grupoA} />
      <ListItems array={grupoB} />
      

    </div>
  )
}

export default App