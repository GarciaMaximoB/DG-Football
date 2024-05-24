import mailIcon from "../assets/mail-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import logoMonocromo from "../assets/logo-monocromo-cobre.png";

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        <h3>Contactanos</h3>
        <span className="contact-item">
          <img src={mailIcon} alt="mail icon" />
          <a href="mailto:contacto@dgfootball.com">contacto@dgfootball.com</a>
        </span>
        <span className="contact-item">
          <img src={phoneIcon} alt="mail icon" />
          <a href="tel:+5491126952420">+54 9 11 2695-2420</a>
        </span>
      </div>
      <div className="footer-bottom">
        <p>Todos los derechos reservados © DG Football Agency</p>
        <img src={logoMonocromo} alt="" />
        <span>
          <p>Sitio diseñado y desarrollado por </p>
          <a href="https://maximogarciadev.com" target="_blank">
            Maximo B. Garcia
          </a>
        </span>
      </div>
    </footer>
  );
}
