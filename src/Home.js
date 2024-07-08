import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css'
import Card from './pages/Card';
import Incio from './pages/Inicio';

const Home = () => {
  return (
    <nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Incio />} />
          <Route path='/card' element={<Card />} />
          <Route path='*' element={<div>Página não encontrada!</div>} />
        </Routes>
      </BrowserRouter>
    </nav>
  )
}
export default Home
