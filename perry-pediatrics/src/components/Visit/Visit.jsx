import React, { Component } from 'react';
import './Visit.css'
import Map from '../Map/Map'

class Visit extends Component {
    render() {
        return (
            <div className="Visit">
                <div className="visit-info">
                <h2>Address:</h2>
                <p>106 Centre Dr</p>
                <p>New Bloomfield, PA 17068</p>
                </div>
                <div className="mapContainer" isAlign="center">
                    <Map component={Map} />
                </div>
                <div className="visit-info hours">
                <h2>Office Hours:</h2>
                <p>Mon 8:30 - 6:00</p>
                <p>Tue 8:30 – 4:30</p>
                <p>Wed 8:30 – 4:30</p>
                <p>Thur 8:30 – 6:00</p>
                <p>Fri 8:30 – 3:30</p>
                <p>Sat 8:00 – 10:00</p>
                </div>
            </div>
        );
    }
}

export default Visit;