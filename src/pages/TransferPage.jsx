import { Transfers } from "../components/Transfers";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TransferPage() {
  return (
    <section className="transfer-section">
      <div className="container-timeline">
        <div className="line"></div>
        {Transfers.map((year) => (
          <TimelineYear key={year.year} year={year} />
        ))}
      </div>
    </section>
  );
}

const TimelineYear = ({ year }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      className="grid"
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }} // Inicialmente establecemos la opacidad en 0 y el scale en 0.8
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }} // Animar opacidad y scale basado en si está en vista
      exit={{ opacity: 0, scale: 0.5 }} // Animar opacidad y scale al salir de la vista
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      <div className="grid-left">
        <p className="year-timeline">{year.year}</p>
      </div>
      <div className="grid-center">
        <div className="circle"></div>
      </div>
      <div className="grid-right">
        <ul className="transfers-list">
          {year.transfers.map((transfer) => (
            <li className="list-item" key={transfer.id}>
              <p className="name-transferencia">{transfer.player}</p>
              <span className="span-team-transfer">
                <p>{transfer.team1}</p>
                <p> 》</p>
                <p>{transfer.team2}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
