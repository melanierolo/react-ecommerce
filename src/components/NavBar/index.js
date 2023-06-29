import React from "react";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">Nosotros</li>
        <li className="nav__item">Productos</li>
        <li className="nav__item">Categorías</li>
        <li className="nav__item">Ayuda</li>
      </ul>
    </nav>
  );
}
