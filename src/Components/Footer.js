import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div
      className="footer_1"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2022 programmer Sreejith. All Rights Reserved.
      </span>
    </div>
  )
}

export default Footer;