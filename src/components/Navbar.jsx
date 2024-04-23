import logoNavbar from "../assets/logo-pelota.webp";
import { useState } from "react";
import menuBars from "../assets/menu-bars.svg";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logoNavbar} alt="logo-dg-football" />
        <p>Football Agency</p>
      </Link>
      <div className={`links-desktop ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleOpen}>
          NOSOTROS
        </Link>

        <Link to="/" onClick={toggleOpen}>
          EQUIPO
        </Link>

        <Link to="/" onClick={toggleOpen}>
          FILOSOFIA
        </Link>

        <Link to="/" onClick={toggleOpen}>
          JUGADORES
        </Link>

        <Link to="/" onClick={toggleOpen}>
          TRANSFERENCIAS
        </Link>

        <Link to="/" onClick={toggleOpen}>
          CONTACTO
        </Link>
      </div>

      <div className="menu-bars" onClick={toggleOpen}>
        <img src={menuBars} alt="menu-bars" className="menu-icon" />
      </div>
    </nav>
  );
}
