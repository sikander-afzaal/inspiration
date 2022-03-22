import React from "react";
import "./Footer.css";
import img from "./footer-logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="left-footer">
        <img src={img} alt="" />
      </div>
      <div className="right-footer">
        <div className="col">
          <h2>LÄNKAR</h2>
          <p>HEM/OM OSS</p>
          <p>NSPIRATIO</p>
          <p>KONTAKT</p>
        </div>
        <div className="col">
          <h2>KONTAKTUPPGIFTER</h2>
          <p>Jan Sjöström 072 857 90 13</p>
          <p>Karlavägen 18 114 31 Stockholm</p>
          <p>Box 12 045 102 24 Stockholm</p>
          <p>Jan.sjostrom@rewabbygg.se</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
