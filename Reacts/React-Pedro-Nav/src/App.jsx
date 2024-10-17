import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contato from './pages/Contato'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/*' element={<h2>Not found 404</h2>}/>
      </Routes>
    </>
  )
}

export default App
