import React from "react";


type ModalContentProps = {
    cambiarEstado: React.Dispatch<React.SetStateAction<boolean>>;
    onSelect: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
    name: string;
    price: number;
    nameTwo: string;
    priceTwo: number;
    nameThree: string;
    priceThree: number;
}

export const ModalContent: React.FC<ModalContentProps> = ({cambiarEstado, onSelect, id, name, price, nameTwo, priceTwo, nameThree, priceThree}) => {

  const handleSelect = () => {
    cambiarEstado(true)
    onSelect({id,name, price, nameTwo, priceTwo, nameThree, priceThree})
  } 
  return (
    <div className="contenidoModal">
                <div className="seleccionServicio">
                    <img className="imagenServicioModal" src="img/servicioModal.png" alt="" />
                    <h3 className="tituloSeleccionServicio">Seleccione un servicio</h3>
                    <p className="textoSeleccionServicio">Por favor seleccione el servicio al cual desea reservar un turno</p>
                    <div className="seccionPreguntaServicio">
                        <h3 className="tituloPreguntaServicio">Preguntas?</h3>
                        <p className="contactoPreguntaServicio">11-2391-6124 | 4592-1206</p> 
                    </div>
                </div>

                <hr />

                <div className="contenidoPrincipalServicio">
                    <div className="contenidoServicio" onClick={handleSelect}>
                      <img className="iconoServicio" src="img/afeitadora.svg" alt="" style={{transform: 'rotate(45deg)'}} />
                      <div className="infoServicio">
                        <h3 className="tituloInfoServicio">{name}</h3>
                        <p className="textoInfoServicio">-Corte de cabello con tijera, maquina y navaja/shaver.(incluye perf, cejas)</p>
                      </div>
                      <div className="costoServicio">
                        <h3 className="montoServicio">${price}</h3>
                        <p className="textoServicio">Inicia desde</p>
                      </div>
                    </div>

                    <div className="contenidoServicio" onClick={handleSelect}>
                      <img className="iconoServicio" src="img/tijeras.svg" alt="" />
                        <div className="infoServicio">
                          <h3 className="tituloInfoServicio">{nameTwo}</h3>
                          <p className="textoInfoServicio">-Servicio de toalla caliente + productos</p>
                        </div>
                        <div className="costoServicio">
                          <h3 className="montoServicio">${priceTwo}</h3>
                          <p className="textoServicio">Inicia desde</p>
                        </div>
                    </div>

                    <div className="contenidoServicio"  onClick={handleSelect}>
                      <img className="iconoServicio" src="img/barba.svg" alt="" />
                        <div className="infoServicio">
                          <h3 className="tituloInfoServicio">{nameThree}</h3>
                          <p className="textoInfoServicio">-No incluye corte de cabello</p>
                        </div>
                        <div className="costoServicio">
                          <h3 className="montoServicio">${priceThree}</h3>
                          <p className="textoServicio">Inicia desde</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}