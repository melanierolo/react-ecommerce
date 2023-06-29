import React from "react";
import logo from "../../assets/icons/logo.png";
import "./style.css";

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo__logotipo" src={logo} alt="logo" />
      <p className="logo__name">DigitalStore</p>
    </div>
  );
}
