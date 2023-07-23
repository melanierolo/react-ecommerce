import React from "react";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="">Nosotros</a>
        </li>
        <li className="nav__item">
          <a href="">Productos</a>
          <ul>
            <li className="nav__subitem">
              <a href="">Computadoras</a>
            </li>
            <li className="nav__subitem">
              <a href="">Periféricos</a>
            </li>
            <li className="nav__subitem">
              <a href="">Extra</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <a href="">Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
}
