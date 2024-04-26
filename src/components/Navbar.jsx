import logoNavbar from "../assets/logo-pelota.webp";
import { useState, useEffect } from "react";
import menuBars from "../assets/menu-bars.svg";
import { Link } from "react-router-dom";
import "../App.css";
import { Links } from "./Links";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-logo">
        <img src={logoNavbar} alt="logo-dg-football" />
        <p>Football Agency</p>
      </Link>
      <div className={`links-desktop ${isOpen ? "open" : ""}`}>
        {Links.map((link) => {
          return (
            <Link to={link.href} key={link.id}>
              {link.text}
            </Link>
          );
        })}
      </div>

      <div className="menu-bars" onClick={toggleOpen}>
        <img src={menuBars} alt="menu-bars" className="menu-icon" />
      </div>
    </nav>
  );
}
