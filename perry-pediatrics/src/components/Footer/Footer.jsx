import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-right">
          <div className="content has-text-centered" />
          <strong>Perry Pediatrics</strong>
          <ul>
            <p> 106 Centre Dr </p>
            <p>New Bloomfield, PA 17068</p>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
