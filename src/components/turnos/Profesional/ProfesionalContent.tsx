import "./ProfesionalContent.css";

type ProfesionalContentProps = {
  cambiarEstado: React.Dispatch<React.SetStateAction<boolean>>,
  goToPreviousSection: () => void;
}

export const ProfesionalContent: React.FC<ProfesionalContentProps> = ({cambiarEstado, goToPreviousSection}) => {

  

  return (
    <div className="contenedorProfesional">
        
        <div className="seleccionProfesional">

            <div className="contenedorBotonRetroceder">
              <div className="botonAtras" onClick={goToPreviousSection}>
                <img className="iconoAtras" src="img/leftArrow.svg" alt="" />
              </div>
            </div>

            <div className="contenedorImagenProfesional">
              <img className="imagenSeleccionProfesional" src="img/seleccionProfesional.svg" alt="" />
            </div>
            <h2 className="tituloProfesional">Seleccione un profesional</h2>
            <p className="textoProfesional">
              Elegi el profesional que desea para su turno
            </p>
            <div className="seccionPreguntaServicio">
                  <h3 className="tituloPreguntaServicio">Preguntas?</h3>
                  <p className="contactoPreguntaServicio">11-2391-6124 | 4592-1206</p>
            </div>
        </div>

        <div className="profesionalesElegir">

          <div className="contenedorProfesionales" onClick={() => cambiarEstado(true)}>
            <img className="iconoProfesional" src="img/profesionalOne.png" alt="" style={{width: "50px"}} />
              <h2 className="nombreProfesionalElegir">Cualquiera</h2>
          </div>

          <div className="contenedorProfesionales" onClick={() => cambiarEstado(true)}>
            <img className="iconoProfesional" src="img/profesionalTwo.png" alt="" />
              <h2 className="nombreProfesionalElegir">MARIANO C.</h2>
          </div>

          <div className="contenedorProfesionales" onClick={() => cambiarEstado(true)}>
            <img className="iconoProfesional" src="img/profesionalThree.png" alt="" />
              <h2 className="nombreProfesionalElegir">ALDO</h2>
          </div>

          <div className="contenedorProfesionales" onClick={() => cambiarEstado(true)}>
            <img className="iconoProfesional" src="img/profesionalFour.png" alt="" />
              <h2 className="nombreProfesionalElegir">CRISTIAN G.</h2>
          </div>

          <div className="contenedorProfesionales" onClick={() => cambiarEstado(true)}>
            <img className="iconoProfesional" src="img/profesionalFive.png" alt="" />
              <h2 className="nombreProfesionalElegir">SANTIAGO</h2>
          </div>

          <div className="contenedorProfesionales" onClick={() => cambiarEstado(true)}> 
            <img className="iconoProfesional" src="img/profesionalSix.png" alt="" />
              <h2 className="nombreProfesionalElegir">FERNANDO</h2>
          </div>
        </div>
    </div>
  )
}