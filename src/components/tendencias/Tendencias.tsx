import "./Tendencias.css";

export const Tendencias = () => {
  return (
    <div>
        <div className="contenedorTendencias">
          <div className="containerImagen">
            <img className="imagenTendencias One" src="img/tendenciaOne.jpg" alt="" />
          </div>

          <div className="containerImagen">
            <img className="imagenTendencias Three" src="img/tendenciaThree.jpg" alt="" />
          </div>

          <div className="containerImagen">
            <img className="imagenTendencias Two" src="img/tendenciaTwo.jpg" alt="" />
          </div>

          <div className="containerImagen">
            <img className="imagenTendencias Four" src="img/tendenciaFour.jpg" alt="" />
          </div>

          <div className="containerImagen">
            <img className="imagenTendencias Five" src="img/tendenciaFive.jpg" alt="" />
          </div>
        </div>

    </div>
  )
}