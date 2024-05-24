import logoNavbar from "../assets/logo-pelota.webp";
import { useState, useEffect } from "react";
import menuBars from "../assets/menu-bars.svg";
import { Link } from "react-router-dom";
import { Links } from "./Links";
import React from "react";

import "../App.css";

const Navbar = React.memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (path, id, e) => {
    const currentPath = window.location.pathname;
    if (currentPath === path || path === "") {
      e.preventDefault();
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {Links.map((link) => (
          <a
            href={link.path}
            key={link.id}
            onClick={(e) => {
              handleLinkClick(link.path, link.seccion, e);
            }}
          >
            {link.text}
          </a>
        ))}
      </div>

      <div className="menu-bars" onClick={toggleOpen}>
        <img src={menuBars} alt="menu-bars" className="menu-icon" />
      </div>
    </nav>
  );
});

export default Navbar;
