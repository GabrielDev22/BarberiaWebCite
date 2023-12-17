import { useState } from "react";

import {Modal} from "./Servicio/Modal";
import {ModalContent} from "./Servicio/ModalContent";
import {Profesional} from "./Profesional/Profesional";
import {ProfesionalContent} from "./Profesional/ProfesionalContent";
import {FechaContent} from "./Fecha/FechaContent";
import {FechaTurno} from "./Fecha/FechaTurno";

const productList = [
  {id: 1, name: 'CORTE DE CABELLO', price:3500, nameTwo: 'CORTE & BARBA', priceTwo: 4800, nameThree: 'BARBA', priceThree: 3000},
]


export const EstadoModal = () => {

    const [estadoModal1, setEstadoModal1] = useState(false);
    const [estadoModal2, setEstadoModal2] = useState(false);
    const [estadoModal3, setEstadoModal3] = useState(false);
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState<selectedarroducts[]>([])
    const [products] = useState(productList);
    
    const handleEstadoModalOne = () => {
      setEstadoModal1(!estadoModal1)
      setModal1Open(true);
      setModal2Open(false);
      setModal3Open(false)
    }
  
    const handleEstadoModalTwo = () => {
      setEstadoModal2(!estadoModal2)
      setModal2Open(true);
      setModal1Open(false);
      setModal3Open(false);
    }
  
    const handleEstadoModalThree = () => {
      setEstadoModal3(!estadoModal3)
      setModal3Open(true);
      setModal2Open(false)
      setModal1Open(false)
    }
  
    const goToPreviousSection = () =>{
        if(modal2Open == true){
          console.log('SI es true')
          setModal2Open(false)
          setModal1Open(true)
        }else if(modal3Open == true){
          console.log("Algo esta fallando")
          setModal3Open(false)
          setModal2Open(true)
        }else{
          console.log('Ninguna operacion ocurrio')
        }
      }

      const handleSelectProduct = (product) => {
        setSelectedProducts([...selectedProducts, product])
      }

  return (
    <div>

        <button className="nav-turnos" onClick={handleEstadoModalOne} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="svgIcon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
          </svg>
            Turnos
        </button>

        <Modal estado={estadoModal1} cambiarEstado={setEstadoModal1} isOpenDoor={modal1Open}>
              {products.map((product) => (
                <ModalContent cambiarEstado={handleEstadoModalTwo} key={product.id} {...product} onSelect={handleSelectProduct} />
              ))}
          </Modal>

          <Profesional newEstado={estadoModal2} cambiarEstado={setEstadoModal2} isOpenDoor={modal2Open}>
            <ProfesionalContent cambiarEstado={handleEstadoModalThree} goToPreviousSection={goToPreviousSection} />
            <div className="contenedorSeleccionProduct">
              <h2 className="tituloListProduct">Product seleccionados</h2>
              <div className="contenedorProducts">
                {selectedProducts.map((product) => (
                  <div>
                    <p key={product.id} className="carritoProduct">
                      {product.name} - ${product.price}
                      <div className="degradadoDecoracion"></div>
                    </p>
                    <p key={product.idTwo} className="carritoProduct">
                        {product.nameTwo} - ${product.priceTwo} 
                    </p>
                    <p key={product.idThree} className="carritoProduct">
                        {product.nameThree} - ${product.priceThree} 
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Profesional>

          <FechaTurno estado={estadoModal3} cambiarEstado={setEstadoModal3} isOpenDoor={modal3Open}>
            <FechaContent goToPreviousSection={goToPreviousSection} />
          </FechaTurno>
    </div>
  )
}
