import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="">Nosotros</a>
        </li>
        <li className="nav__item">
          <a href=""> Productos</a>
          <ul>
            <li className="nav__subitem">
              <a href="">
                <NavLink to="/category/1">Computadoras</NavLink>
              </a>
            </li>
            <li className="nav__subitem">
              <a href="">
                <NavLink to="/category/2">Periféricos</NavLink>
              </a>
            </li>
            <li className="nav__subitem">
              <a href="">
                <NavLink to="/category/3">Extra</NavLink>
              </a>
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
