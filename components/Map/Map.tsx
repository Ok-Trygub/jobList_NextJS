import React from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';
import DefaultTheme from './Theme';


interface Center {
    center: {
        lat: number,
        lng: number,
    }
}


const containerStyle = {
    width: '99.8%',
    height: '215px',
    marginTop: '-1px',
    borderRadius: '0 0 8px 8px'
};


const defaultOptions = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: true,
    clickableIcons: true,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    isFractionalZoomEnabled: true,
    styles: DefaultTheme,
}


const Map = ({center}: Center) => {

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={defaultOptions}
        >
            <Marker
                position={center}
                icon={{url: '../locationMarker.svg'}}
            />
            <></>
        </GoogleMap>
    );
};

export default Map;
