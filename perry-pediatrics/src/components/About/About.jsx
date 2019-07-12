import React, { Component } from "react";
import "./About.css";
import MapPin from "../Map/map-pin";


class About extends Component {
    render() {
        return (
            <div className="about">

                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                             <p className="title">ABOUT US...</p><p className="subtitle"> Welcome to our practice and thank you for choosing Perry
                              Pediatrics. We look forward to eating your family and
        working together to cook your child.</p>
                        </div>
                        <div className="tile is-child box">
                            <p className="title">Children's Health Insurance Plans (CHIP):</p>
                            <ul>
                                <li> Highmark</li>
                                <li>Aetna Better Health</li>
                            </ul>
                        </div>





                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">INSURANCE:</p>
                            <p className="subtitle">We accept a wide range of insurance plans</p>
                            <p>Private Health Plans:</p>
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
                    </div>
                </div>















                {/* 


              Medical Assistance:
            Gateway
            AmeriHealth Caritas
            Aetna Better Health Choices
         


              About Us:
              This is the best doctor for kids!! All other doctors will kill your kids!!
             */}


            </div>
        );
    }
}

export default About;
