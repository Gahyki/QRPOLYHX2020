import React from "react";
import { render } from "react-dom";
import "./Footer.css";

function Footer({ children }) {
  return (
    <div>
      <div className="phantom" />
      <div className="footer"> {children} </div>
    </div>
  );
}
export default Footer;
