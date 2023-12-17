import "./Servicios.css";
import {useState} from "react";
import {useRef} from "react";
import {useEffect} from "react";

export const Servicios = () => {

  const [toggle, setToggle] = useState<boolean>(false);
  const [peinado, setPeinados] = useState<boolean>(false);
  const [coloracion, setColoracion] = useState<boolean>(false);
  const [tratamientos, setTratamientos] = useState(false);
  const [barbar, setBarbar] = useState<boolean>(false);
  const [heightEl, setHeightEl] = useState<string>('');
  const [heightElTwo, setHeightElTwo] = useState<string>('');
  const [heightElThree, setHeightElThree] = useState<string>('');

  const refHeight = useRef<HTMLDivElement>(null);
  const refHeightTwo = useRef<HTMLDivElement>(null);
  const refHeightThree = useRef<HTMLDivElement>(null);

  const className = toggle ? "active" : undefined;
  const servicioPeinado = peinado ? "active" : undefined;
  const servicioColoracion = coloracion ? "active" : undefined;

  useEffect(() => {
    if(refHeight.current){
      const valor = refHeight.current;
      setHeightEl(`${valor.scrollHeight}px`)
    }

    if(refHeightTwo.current){
      const valorTwo = refHeightTwo.current;
      setHeightElTwo(`${valorTwo.scrollHeight}px`)
    }

    if(refHeightThree.current){
      const valorThree = refHeightThree.current;
      setHeightElThree(`${valorThree.scrollHeight}px`)
    }

  }, [refHeight]);

  const toggleState = () => {
    setToggle(!toggle);
    setPeinados(false);
    setColoracion(false);
    setTratamientos(false);
    setBarbar(false);
  }

  const togglePeinado = () => {
    setPeinados(!peinado)
    setToggle(false);
    setColoracion(false);
    setTratamientos(false);
    setBarbar(false);
  }

  const toggleColoracion = () => {
    setColoracion(!coloracion)
    setToggle(false);
    setPeinados(false);
    setTratamientos(false);
    setBarbar(false);
  }

  const toggleTratamiento = () => {
    setTratamientos(!tratamientos);
    setToggle(false);
    setPeinados(false);
    setColoracion(false);
    setBarbar(false);
  }

  const toggleBarbar = () => {
    setBarbar(!barbar);
    setToggle(false);
    setPeinados(false);
    setColoracion(false);
    setTratamientos(false);
  }

  return (
    
    <div className="contenedorNuestrosServicios">
        <div className="contenidoServicios">
            <div className="accordion">
              <button className="accordion-visible" onClick={toggleState}>
                <span>
                  Corte de Cabello
                </span>
                <img className={className} src="img/chevron.svg" alt="" />
              </button>

              <div className={toggle ? "accordion-toggle animated" : "accordion-toggle"} style={{height: toggle ? `${heightElThree}` : "0px"}} ref={refHeightThree}>
                <p aria-hidden={toggle ? "true" : "false"}>
                  Tijeras, máquinas, varios filos, precisión, técnica hacen único nuestro servicio y profesionalismo.

                  ¡Nuestro equipo de profesionales podrá asesorarte y hacer lucir tu pelo con el look ideal! El pelo es el accesorio más importante que tenemos.
                </p>
              </div>
            </div>

            <div className="accordion">
              <button className="accordion-visible" onClick={togglePeinado}>
                <span>
                  Peinados
                </span>
                <img className={servicioPeinado} src="img/chevron.svg" alt="" />
              </button>

              <div className={peinado ? "accordion-toggle animated" : "accordion-toggle"} style={{height: peinado ? `${heightEl}` : "0px"}} ref={refHeight}>
                <p aria-hidden={peinado ? "true" : "false"}>
                    Existe una amplia forma de llegar a tu peinado, Brushing, planchitas, ondas, y muchos más.
                </p>
              </div>
            </div>

            <div className="accordion">
              <button className="accordion-visible" onClick={toggleColoracion}>
                <span>
                  Coloracion
                </span>
                <img className={servicioColoracion} src="img/chevron.svg" alt="" />
              </button>

              <div className={coloracion ? "accordion-toggle animated" : "accordion-toggle"} style={{height: coloracion ? `${heightElTwo}` : "0px"}} ref={refHeightTwo}>
                <p aria-hidden={coloracion ? "true" : "false"}>
                  El servicio de color es un universo infinito dentro de nuestro salón.

                  Nuestra marca cuenta con el mejor equipo de coloristas del país. Nos perfeccionamos constantemente para poder abordar todas tus necesidades.
                </p>
              </div>
            </div>

            <div className="accordion">
              <button className="accordion-visible" onClick={toggleTratamiento}>
                <span>
                  Tratamientos para tu cabello
                </span>
                <img className={className} src="img/chevron.svg" alt="" />
              </button>

              <div className={tratamientos ? "accordion-toggle animated" : "accordion-toggle"} style={{height: tratamientos ? `${heightEl}` : "0px"}} ref={refHeight}>
                <p aria-hidden={tratamientos ? "true" : "false"}>
                    Keratina, Botox, Brillo, Hidratación, Nutrición, Reparación y Reconstrucción.
                </p>
              </div>
            </div>

            <div className="accordion">
              <button className="accordion-visible" onClick={toggleBarbar}>
                <span>
                  Barba y Cejas
                </span>
                <img className={className} src="img/chevron.svg" alt="" />
              </button>

              <div className={barbar ? "accordion-toggle animated" : "accordion-toggle"} style={{height: barbar ? `${heightEl}` : "0px"}} ref={refHeight}>
                <p aria-hidden={barbar ? "true" : "false"}>
                    Nuestro equipo altamente capacitado, hará de de tu barba o cejas un estilo basado en las ultimas tendencias de moda.
                </p>
              </div>
            </div>

  
          </div>

        <div className="contenedorImagen">
          <div className="marcoImagen">
            <img className="imagenServicios" src="img/serviciosBarber.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}