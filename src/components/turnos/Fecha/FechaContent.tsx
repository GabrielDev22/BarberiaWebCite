import "./FechaContent.css";

type FechaContentProps = {
  goToPreviousSection: () => void;
}

export const FechaContent: React.FC<FechaContentProps> = ({goToPreviousSection}) => {

  

  return (
    <div className="contenedorFechas">
      
      <div className="ExplicacionFechas">

            <div className="contenedorBotonRetroceder">
              <div className="botonAtras" onClick={goToPreviousSection}>
                <img className="iconoAtras" src="img/leftArrow.svg" alt="" />
              </div>
            </div>

          <div className="contenedorImagenFecha">
              <img className="imagenFechas" src="img/calendarioFechas.svg" alt="" />
          </div>
          <h2 className="tituloExplicacionFechas">Seleccione una fecha y horario</h2>
          <p className="explicacionFechasTexto">
            Haga clic en una fecha para ver el rango de tiempo de los espacios disponibles, haga clic en un horario verde para reservarlo
          </p>
          <div className="seccionPreguntaServicio">
              <h3 className="tituloPreguntaFecha">Preguntas?</h3>
              <p className="contactoPreguntaFecha">11-2391-6124 | 4592-1206</p>
          </div>
      </div>

      <div className="seleccionFechas">
        <h2 className="tituloSeleccionFecha">Noviembre 2023</h2>
          <div className="contenidoFechas">

          </div>
      </div>

      <div className="resumenCita">
          <h2>ResumenCitas</h2>
      </div>

    </div>
  )
}