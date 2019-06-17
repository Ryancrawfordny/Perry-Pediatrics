import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-right">
          <p>
            <strong>Perry Pediatrics</strong>
            <p>106 Centre Dr</p>
            <p className="second-line">New Bloomfield, PA 17068</p>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
