

type ModalContentProps = {
    cambiarEstado: React.Dispatch<React.SetStateAction<boolean>>;
    onSelect: (item: any) => void;
    name: React.ReactNode;
    price: React.ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({cambiarEstado, onSelect, name, price}) => {

  
  const productList = {
      name: 'CORTE DE CABELLO', price:3500,
      nameTwo: 'CORTE & BARBAR', priceTwo: 4800,
      nameThree: 'BARBA', priceThree:3000
  }

  const handleSelect = () => {
    cambiarEstado(true)
    onSelect({name, price})
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
                        <h3 className="tituloInfoServicio">{productList.name}</h3>
                        <p className="textoInfoServicio">-Corte de cabello con tijera, maquina y navaja/shaver.(incluye perf, cejas)</p>
                      </div>
                      <div className="costoServicio">
                        <h3 className="montoServicio">${productList.price}</h3>
                        <p className="textoServicio">Inicia desde</p>
                      </div>
                    </div>

                    <div className="contenidoServicio" onClick={() => cambiarEstado(true)}>
                      <img className="iconoServicio" src="img/tijeras.svg" alt="" />
                        <div className="infoServicio">
                          <h3 className="tituloInfoServicio">{productList.name}</h3>
                          <p className="textoInfoServicio">-Servicio de toalla caliente + productos</p>
                        </div>
                        <div className="costoServicio">
                          <h3 className="montoServicio">${productList.price}</h3>
                          <p className="textoServicio">Inicia desde</p>
                        </div>
                    </div>

                    <div className="contenidoServicio"  onClick={() => cambiarEstado(true)}>
                      <img className="iconoServicio" src="img/barba.svg" alt="" />
                        <div className="infoServicio">
                          <h3 className="tituloInfoServicio">{productList.name}</h3>
                          <p className="textoInfoServicio">-No incluye corte de cabello</p>
                        </div>
                        <div className="costoServicio">
                          <h3 className="montoServicio">${productList.price}</h3>
                          <p className="textoServicio">Inicia desde</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}