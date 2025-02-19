import api_key from "../../apiFolder/api"
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import "../styles/Map.css"
import { useEffect, useState } from "react";
const API_KEY = api_key;


const GoogleMapShow = ({latitude, longitude}) => {

    const [mapCenter, setMapCenter] = useState({lat: latitude, lng: longitude})

    useEffect(() => {
      setMapCenter({ lat: latitude, lng: longitude})
    }, [latitude,longitude])

    const handleCameraChanged = (event) => {
      const newCenter = event.detail.center
      setMapCenter(newCenter)
    }

    return (
        <APIProvider apiKey={API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
        <div style={{ height: '50vh', width: '100%' }}>
        <Map
        defaultZoom={13.4}
        center={mapCenter}
        onCameraChanged= {handleCameraChanged}
        >
        </Map>
        
        </div>
        </APIProvider>
    )
}

export default GoogleMapShow;