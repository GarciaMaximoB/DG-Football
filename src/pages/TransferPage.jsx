import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useResponsiveThreshold from "../hooks/useResponsiveThreshold";
import { getTransfers } from "../components/getTransfers";

export default function TransferPage() {
  const [transfers, setTransfers] = useState([]); // Estado para almacenar las transferencias
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  // Cargar las transferencias al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransfers(); // Obtén las transferencias de Contentful
        setTransfers(data); // Actualiza el estado con los datos
      } catch (error) {
        console.error("Error fetching transfers:", error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchData();
  }, []);

  // Muestra un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div className="loading">Cargando transferencias...</div>;
  }

  return (
    <section className="transfer-section">
      <div className="container-timeline">
        <div className="line"></div>
        {transfers.map((year) => (
          <TimelineYear key={year.year} year={year} />
        ))}
      </div>
    </section>
  );
}

const TimelineYear = ({ year }) => {
  const threshold = useResponsiveThreshold();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  return (
    <motion.div
      className="grid"
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
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
                <p className="flecha-transferencia desktop"> 》</p>
                <p className="flecha-transferencia"> ↓ </p>
                <p>{transfer.team2}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
