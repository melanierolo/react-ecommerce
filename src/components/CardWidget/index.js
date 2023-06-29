import React from "react";
import iconShopping from "../../assets/icons/shopping-cart.png";
import "./style.css";

export default function CardWidget() {
  return (
    <div className="shopping">
      <img
        className="shopping__icon"
        src={iconShopping}
        alt="icon shopping cart"
      />
    </div>
  );
}
