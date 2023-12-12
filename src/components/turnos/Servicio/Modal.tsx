import "./Molda.css";

type ModalProps = {
    children: React.ReactNode;
    estado: React.ReactNode;
    cambiarEstado: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenDoor: boolean;
}

export const Modal: React.FC<ModalProps> = ({children, estado,cambiarEstado, isOpenDoor}) => {
  
    if(!isOpenDoor) return null;

    return (
    <>
    {estado &&
        <div className="overlay">
            <div className="contenedorModal">
                <div className="encabezadoModal">
                    <h3>Servicio Principal</h3>
                </div>
                <button className="botonCerrar" onClick={() => cambiarEstado(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
                {children}
            </div>
        </div>
    }
    </>
  )
}