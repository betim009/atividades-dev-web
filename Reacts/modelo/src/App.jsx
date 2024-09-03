import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/contato" element={<Contato />}/>
      <Route path="/*" element={<span>Não existe esta rota</span>}/>
    </Routes>
  )
}

