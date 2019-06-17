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
                height: 350,
                latitude:40.41835,
                longitude: -77.19992,
                zoom: 15
            },
            popupInfo: null
        }
        this._renderMarker = this._renderMarker.bind(this)

        this._renderPopup = this._renderPopup.bind(this)

    };

    _renderMarker() {
        const lat = Number(40.41835)
        const long = Number(-77.19992)
        return(
            <Marker longitude={long} latitude={lat}>
                <MapPin 
                size={15} />
            </Marker>
        ) 
    }


    _renderPopup() {
        const lat = Number(40.41835)
        const long = Number(-77.19992)
        return (
            <Popup tipSize={5}
            anchor="top"
            longitude={long}
            latitude={lat}>
                <MapInfo />
            </Popup>
        )
    }

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
                mapboxApiAccessToken={MAPBOX_TOKEN}>
                    {this._renderMarker()}
                    {this._renderPopup()}
                </ReactMapGL>

                </div>
                
            </div>
        );
    }
}

export default Map;