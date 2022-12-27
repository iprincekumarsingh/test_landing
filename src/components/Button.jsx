import React from "react";
import "../style/button.css";
const Button = ({ value, stylecss, bgcolor, color, event_methods }) => {
  return (
    <button
    
      style={{ backgroundColor: bgcolor, color: color }}
      className={stylecss}
    >
      {value}
      <i class="icon-arrow-right"></i>
    </button>
  );
};
export default Button;
