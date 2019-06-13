import React, { Component } from 'react';
import './Visit.css'

class Visit extends Component {
    render() {
        return (
            <div className="Visit">
                <h2>Address:</h2>
                <p>106 Centre Dr</p>
                <p>New Bloomfield, PA 17068</p>

                <h2>Phone Number:</h2>
                <p>(717) 582-2181</p>
            </div>
        );
    }
}

export default Visit;