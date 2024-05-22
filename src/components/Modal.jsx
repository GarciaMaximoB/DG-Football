import { motion } from "framer-motion";
import Backdrop from "./Backdrop.jsx";
import imagen from "../assets/Andres-Taberna.webp"
import iconClose from "../assets/cerrar-icon.png"
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
    
           <img src={iconClose} alt="" onClick={handleClose} className="icon-close"/>
      

        <div className="teammate-card-container">
          <div className="teammate-card-image">
            <img src={imagen} alt="" />
          </div>
          <div className="teammate-card-text">
            <h3>Conocé a Juan</h3>
            <p>
              Juan Dávola es un ex futbolista, contador público, empresario y
              agente FIFA que está obsesionado con llevar a los deportistas a
              niveles de rendimiento futbolísticos y económicos marcadamente
              superiores a los que tendrían sin su intervención.
              <br />
              <br />
              Desde 2008 trabaja representando a futbolistas, en esos primeros
              años en Soccer Holding con sede en Madrid y a partir de 2010 en DG
              Football Agency, la cual fundó y donde actualmente se desempeña
              como director general.
              <br />
              <br />
              Siguiendo una estrategia de expansión, en 2022 decidió incorporar
              nuevos agentes, ampliando la cartera de futbolistas y logrando en
              el corto plazo transferencias por primera vez a países como:
              Japón, Brasil, Paraguay, Uruguay, Chile, Ecuador, Rumania y
              Bulgaria, que se suman a las ya realizadas en Italia, España,
              Portugal, Turquía, Grecia y Emiratos Árabes Unidos.
            </p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
