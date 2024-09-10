import { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient";

export default function TestPage() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "jugador"]{nombre, imagenJugador}')
      .then((data) => setJugadores(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container-test">
      <div className="container-test-container">
        {jugadores.map((jugador, index) => (
          <div key={index}>
            <h2>{jugador.nombre}</h2>
            {jugador.imagenJugador && jugador.imagenJugador.asset && (
              <img
                src={urlFor(jugador.imagenJugador).width(200).url()}
                alt={jugador.nombre}
                
              /> 
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
