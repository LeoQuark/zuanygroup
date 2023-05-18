import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '35rem',
    height: '25rem'
};

const center = {
    lat: -33.592927,
    lng: -71.6115959999999
};

const GoogleMapsContact = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.REACT_APP_GMAPS_API_KEY
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className='aa'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            // style={{ width: '100px', height: '100px' }}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker position={center} />
            </GoogleMap>
        </div>
    ) : <></>
}

export default GoogleMapsContact