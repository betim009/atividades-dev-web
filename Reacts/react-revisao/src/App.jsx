import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
    </>

  )
}

export default App