import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h1 className="services-heading">Services We Provide</h1>
        <div className="services-header">
          <ul className="services-list">
            <li>Visits for expecting parents</li>
            <li>
              Visits for new or transfer patients, from newborn to college
            </li>
            <li>
              Comprehensive health maintenance/well care to infants, children
              and adolescents
            </li>
            <li>Routine vaccinations</li>
            <li>Acute/sick care</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Services;
