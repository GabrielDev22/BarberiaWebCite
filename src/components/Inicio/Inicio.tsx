import "./Inicio.css";

export const Inicio = () => {

  return (
    <div className="contenedorPortada">
      <div className="contenidoBarber">
        <img className="imgBarber" src="img/portadaBarberia.jpg" alt="" />
          <div className="degradado"></div>
        <div className="boxTextInicio">
          <h2 className="tituloInicio">Barber Shop <br /> <span className="personalStyles">Cortes a medidas</span></h2>
          <p className="textoInicio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem distinctio at nostrum sunt voluptates magnam expedita molestias atque optio, delectus quod vero explicabo aliquam!
          </p>
        </div>
      </div>
    </div>
  )
}
