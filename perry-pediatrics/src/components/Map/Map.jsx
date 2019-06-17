import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MapInfo from './link-info'
import MapPin from './map-pin';

const MAPBOX_TOKEN = process.env.REACT_APP_API_KEY



class Map extends Component {
    constructor(){
        super()
        this.state = {
            viewport: {
                width: 600,
                height: 400,
                latitude:40.41835,
                longitude: -77.19992,
                zoom: 11
            },
            popupInfo: null
        }
    };

    render() {
        const { viewport } = this.state;

        return (
            <div className="level">
                <div className="level-item">
                <ReactMapGL
                width={viewport.width}
                height={viewport.height}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}
                
                mapStyle="mapbox://styles/mapmen/cjx0pcuia66b31cqs42an72vu"

                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={MAPBOX_TOKEN}/>

                </div>
                
            </div>
        );
    }
}

export default Map;