import React from "react";
import "../css/Button.css"

const Button = ({ title, href, styles }) => {
  return (
    <a href={href} style={styles} className="button_a">
      <div className="button_text">{title}</div>
    </a>
  );
};

export default Button;
