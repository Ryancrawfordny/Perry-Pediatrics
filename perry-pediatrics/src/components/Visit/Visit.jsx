import React, { Component } from 'react';
import './Visit.css'
import Map from '../Map/Map'

class Visit extends Component {
    render() {
        return (
            <div className="Visit">
                <h2>Address:</h2>
                <p>106 Centre Dr</p>
                <p>New Bloomfield, PA 17068</p>

                <Map />
            </div>
        );
    }
}

export default Visit;