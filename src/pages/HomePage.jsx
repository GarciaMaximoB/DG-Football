import video from "../assets/videoFondo.webm";
import { Link } from "react-router-dom";
import youtubeIcon from "../assets/youtube-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import transferMktIcon from "../assets/transfermkt-icon.png";
import flechaAbajo from "../assets/flecha-abajo.png";
import logoMonocromoCobre from "../assets/logo-monocromo-cobre.png";
import andresTabernaImage from "../assets/Andres-Taberna.webp"

export default function HomePage() {
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
              alt="Instagram-icon"
              className="icon-social"
            />
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCSU4NlK4HVhwj7dizRGPNDg"
            target="_blank"
          >
            <img src={youtubeIcon} alt="Youtube-icon" className="icon-social" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/dgf-agency/"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="Linkedin-icon"
              className="icon-social"
            />
          </Link>
          <Link
            to="https://www.transfermarkt.com/juan-i-davola-davola-group-football-/beraterfirma/berater/8202"
            target="_blank"
          >
            <img
              src={transferMktIcon}
              alt="transfermarkt-icon"
              className="icon-social"
            />
          </Link>
          <Link className="link-flecha-abajo" to="/#about">
            <img
              src={flechaAbajo}
              alt="flecha-abajo"
              className="flecha-abajo-homepage"
            />
          </Link>
        </div>
      </header>

      <section className="about-section" id="about">
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

      <section className="team-section">
        <div className="team-container">
          <h3>NUESTRO EQUIPO</h3>
          <div className="team-grid">
            <div className="teammate">
              <Link>
                <img src={andresTabernaImage} alt="Foto de Andres Taberna" className="teammate-image"/>
              </Link>
              <p className="name-teammate">Andres Taberna</p>
              <p className="cargo-teammate">Cargo</p>
            </div> 
            <div className="teammate">
              <Link>
                <img src={andresTabernaImage} alt="Foto de Andres Taberna" className="teammate-image"/>
              </Link>
              <p className="name-teammate">Andres Taberna</p>
              <p className="cargo-teammate">Cargo</p>
            </div>
            <div className="teammate">
              <Link>
                <img src={andresTabernaImage} alt="Foto de Andres Taberna" className="teammate-image"/>
              </Link>
              <p className="name-teammate">Andres Taberna</p>
              <p className="cargo-teammate">Cargo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
