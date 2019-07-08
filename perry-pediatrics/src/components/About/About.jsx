import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h2>Welcome to our practice and thank you for choosing Perry Pediatrics. We look forward to getting to know your family and working together to provide the best posible care for your child.</h2>
                <h1>Insurance</h1>
                <h2>We participate with many major insurance carriers.</h2>
                <div className="private"></div>
                <h3>Private Health Plans :</h3>
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
        );
    }
}

export default About;