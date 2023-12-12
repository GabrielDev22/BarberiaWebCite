import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { InicioPage } from './page/inicio/InicioPage';
import { ServiciosPage } from './page/servicios/ServiciosPage';
import { TendenciasPage } from './page/tendencias/TendenciasPage';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<InicioPage />}></Route>
        <Route path='/Servicios' element={<ServiciosPage />  }></Route>
        <Route path='/Tendencias' element={ <TendenciasPage />  }></Route>
      </Routes>
    </Router>
  )
}

export default App
