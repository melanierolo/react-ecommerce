import React from "react";
import logo from "../../assets/icons/logo.png";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function Logo() {
  console.log("Vamos a home");
  return (
    <>
      <NavLink to="/">
        <div className="logo">
          <img className="logo__logotipo" src={logo} alt="logo" />
          <p className="logo__name">DigitalStore</p>
        </div>
      </NavLink>
    </>
  );
}
