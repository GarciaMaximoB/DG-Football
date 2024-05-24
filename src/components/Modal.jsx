import { motion } from "framer-motion";
import Backdrop from "./Backdrop.jsx";
import iconClose from "../assets/cerrar-icon.png";
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

const Modal = ({ teammate, handleClose }) => {
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
        <img
          src={iconClose}
          alt="close icon"
          onClick={handleClose}
          className="icon-close"
        />

        <div className="teammate-card-container">
          <div className="teammate-card-image">
            <img src={teammate.image} alt={`Imagen de ${teammate.name}`}/>
          </div>
          <div className="teammate-card-text">
            <h3>Conocé a {teammate.apodo}</h3>
            <p>
              {teammate.text.split("\n").map((paragraph, index) => (
                <p key={index} className="parrafo-teammate">{paragraph}</p>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
