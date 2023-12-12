import "./Navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { EstadoModal } from "../turnos/EstadoModal"


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <div className="navbar">
      <div className="nav_logo">BarberShop</div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to='/'>Inicio</Link>
        <Link to={'/Servicios'}>Servicios</Link>
        <Link to={'/Tendencias'}>Tendencias</Link>
      </div>

      <EstadoModal />

      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
