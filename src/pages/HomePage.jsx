import video from "../assets/videoFondo.webm";
import { Link } from "react-router-dom";
import youtubeIcon from "../assets/youtube-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import transferMktIcon from "../assets/transfermkt-icon.png";
import flechaAbajo from "../assets/flecha-abajo.png";
import logoMonocromoCobre from "../assets/logo-monocromo-cobre.png";
import Teammate from "../components/Teammate";
import andresTabernaImage from "../assets/equipo/Andres-Taberna.webp";
import { team } from "../components/team";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import { useState } from "react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeammate, setSelectedTeammate] = useState(null);

  const handleTeammateClick = (teammate) => {
    setSelectedTeammate(teammate);
  };

  const handleCloseModal = () => {
    setSelectedTeammate(null);
  };

  const close = () => setModalOpen(false);
  return (
    <>
      <header className="header-homepage">
        <video autoPlay muted loop>
          <source src={video} type="video/webm" />
        </video>
        <div className="container-header-homepage">
          <h1 className="main-title">DG FOOTBALL AGENCY</h1>
          <h2 className="lema">Jugamos distinto. Somos distintos</h2>
        </div>

        <div className="redes">
          <Link
            to="https://www.instagram.com/dgfootball/?hl=es"
            target="_blank"
          >
            <img
              src={instagramIcon}
              alt="Instagram icon"
              className="icon-social"
            />
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCSU4NlK4HVhwj7dizRGPNDg"
            target="_blank"
          >
            <img src={youtubeIcon} alt="Youtube icon" className="icon-social" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/dgf-agency/"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="Linkedin icon"
              className="icon-social"
            />
          </Link>
          <Link
            to="https://www.transfermarkt.com/juan-i-davola-davola-group-football-/beraterfirma/berater/8202"
            target="_blank"
          >
            <img
              src={transferMktIcon}
              alt="Transfermarkt icon"
              className="icon-social"
            />
          </Link>
          <Link className="link-flecha-abajo">
            <img
              src={flechaAbajo}
              alt="flecha-abajo"
              className="flecha-abajo-homepage"
            />
          </Link>
        </div>
      </header>

      <section className="about-section" id="nosotros">
        <div className="about-container">
          <div className="about-div">
            <h2>Sobre Nosotros</h2>
            <p>
              Somos una agencia de representación de futbolistas que nace de la
              pasión que los integrantes tenemos por el fútbol, y tiene como
              objetivo llevar a los deportistas a niveles de rendimiento
              futbolísticos y económicos marcadamente superiores a los que
              tendrían sin nuestro asesoramiento.
              <br />
              <br />
              Transparencia, honestidad, preparación y formación son pilares
              fundamentales de nuestra empresa y lo que nos diferencia en la
              industria.
              <br />
              <br />
              Nuestra misión es proporcionar a los futbolistas un servicio
              personalizado y de alta calidad, necesarios para alcanzar su
              máximo potencial en el deporte y en la vida.
              <br />
              <br />
              Nuestra visión es convertirnos en referentes en Argentina en el
              desarrollo integral de futbolistas, contribuyendo al éxito de
              nuestros clientes en el ámbito profesional y personal, siendo
              reconocidos por nuestro servicio personalizado de excelencia y
              nuestros representados, los cuales tienen un ADN que los
              distingue.
            </p>
          </div>
          <div className="about-logo">
            <img src={logoMonocromoCobre} alt="Logo DG Football" />
          </div>
        </div>
      </section>

      <section className="team-section" id="equipo">
        <div className="team-container">
          <h3>NUESTRO EQUIPO</h3>
          <div className="team-grid">
            <div className="row">
              {team.slice(0, 3).map((teammate) => (
                <Teammate
                  key={teammate.id}
                  image={andresTabernaImage}
                  name={teammate.name}
                  cargo={teammate.cargo}
                  onClick={() => handleTeammateClick(teammate)}
                />
              ))}
            </div>
            <div className="row row2">
              {team.slice(3, 5).map((teammate) => (
                <Teammate
                  key={teammate.id}
                  image={andresTabernaImage}
                  name={teammate.name}
                  cargo={teammate.cargo}
                  onClick={() => handleTeammateClick(teammate)}
                />
              ))}
            </div>
          </div>
        </div>
        {selectedTeammate && (
          <Modal teammate={selectedTeammate} handleClose={handleCloseModal} />
        )}
      </section>

      <section className="filosofia-section" id="filosofia">
        <div className="filosofia-container">
          <h2>Filosofia</h2>
          <ul className="keys-list">
            <li className="key">
              Tener la reputación como el mayor patrimonio de la empresa
            </li>
            <li className="key">Profesionalizamos la representación.</li>
            <li className="key">
              Honestidad, Transparencia, Lealtad, Profesionalismo, Juventud.
            </li>
            <li className="key">
              Capacidad de trabajo. Nos dedicamos de manera intensa a nuestro
              trabajo, entonces el margen de éxito suele ser muy superior.
            </li>
            <li className="key">
              Cantidad limitada de futbolistas a representar, cada jugador va a
              sentir que es el jugador más importante de la empresa por la
              manera en que nos ocupamos de él.
            </li>
            <li className="key">
              No nos conformamos con buenos jugadores, buscamos algunas
              características definidas que los distinguen por sobre el resto
            </li>
            <li className="key">
              Hacemos de nuestros jugadores parte de nuestra empresa y familia.
            </li>
            <li className="key">
              Nos ponemos en la piel del representado. Los derechos de los
              jugadores son lo primero.
            </li>
            <li className="key">
              Tenemos conformado un grupo de trabajo que les permite a los
              futbolistas tener absoluta tranquilidad y comodidad maximizando su
              rendimiento.
            </li>
            <li className="key">
              Buscamos la estabilidad emocional y económica de los futbolistas.
            </li>
            <li className="key">
              Profundo conocimiento del mundo del fútbol desde diferentes
              ópticas (Jugador, Dirigente, Manager, Representante,
              Intermediario).
            </li>
            <li className="key">
              Los clubes nos conocen por nuestra distintiva seriedad y
              profesionalismo, generando relaciones de largo plazo.
            </li>
            <li className="key">
              Excelente relación con clubes y agentes del mundo (Desde 2008
              hacemos giras internacionales anuales ininterrumpidamente)
            </li>
            <li className="key">
              Planificación del futuro de los jugadores (desde que comienzan a
              trabajar en la empresa estamos planificando su retiro, para que
              cuando culmine su carrera pueda tener ingresos similares a los de
              un jugador de primera división o tengan un proyecto laboral
              encaminado).
            </li>
            <li className="key">
              Hacemos crecer a nivel personal a los jugadores, los capacitamos y
              educamos.
            </li>
            <p>Y por ultimo pero no por ello menos importante:</p>
            <li className="key">
              Representar solamente jugadores que compartan nuestra visión y
              valores
            </li>
          </ul>
        </div>
      </section>

      <AnimatePresence initial={false} wait={true} onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
}
