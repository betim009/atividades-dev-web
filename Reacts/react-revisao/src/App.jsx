import { useContext } from "react"
import Context from "./context/Context"
import Titles from "./Titles";




function App() {
  const {valor, setValor} = useContext(Context);


  console.log(valor)
  return (
    <>
    <h2>O valor é {valor}</h2>
    <button onClick={() => setValor(valor + 1)}>+</button>
    <Titles />
    </>

  )
}

export default App