import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import './App.css'
import Naruto from "./Naruto"
import Pokemons from "./Pokemons"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/naruto" element={<Naruto />}/>
        <Route path="/pokemons" element={<Pokemons />}/>
      </Routes>
    </>
  )
}

export default App