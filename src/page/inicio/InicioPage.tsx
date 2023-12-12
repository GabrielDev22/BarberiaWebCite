import { Inicio } from "../../components/Inicio/Inicio"
import { Servicios } from "../../components/servicios/Servicios"
import {Tendencias} from "../../components/tendencias/Tendencias";


export const InicioPage = () => {
  return (
    <div>
        <Inicio />
        <Servicios />
        <Tendencias />
    </div>
  )
}