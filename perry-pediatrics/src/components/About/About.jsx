import React, { Component } from "react";
import "./About.css";


class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <h2>
                Welcome to our practice and thank you for choosing Perry
                Pediatrics. We look forward to getting to know your family and
                working together to provide the best possible care for your
                child.
              </h2>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <article class="tile is-child notification is-success">
            <h1>Insurance</h1>
            <h2>We participate with many major insurance carriers.</h2>
            <div className="private">
              <h3>Private Health Plans:</h3>
              <ul>
                <li>HighMark</li>
                <li>Capital Blue Cross</li>
                <li>Aetna</li>
                <li>Cigna</li>
                <li>Coventry</li>
                <li>Geisinger</li>
                <li>Health Assurance</li>
                <li>Humana</li>
                <li>Keystone (Newborns only)</li>
                <li>Meritain</li>
                <li>PPHN</li>
                <li>United</li>
                <li>Tricare</li>
              </ul>
            </div>
            <div className="children">
              <h3>Children's Health Insurance Plans (CHIP):</h3>
              <ul>
                <li>Highmark</li>
                <li>Aetna Better Health</li>
              </ul>
            </div>
            <div className="assistance">
              <h3>Medical Assistance:</h3>
              <ul>
                <li>Gateway</li>
                <li>AmeriHealth Caritas</li>
                <li>Aetna Better Health Choices</li>
              </ul>
            </div>
          </article>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <h1>About Us</h1>
              <p>This is the best doctor for kids!! All other doctors will kill your kids!!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
