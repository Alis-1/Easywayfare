import api_key from "../../apiFolder/api"
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import "../styles/Map.css"
const API_KEY = api_key;


const GoogleMapShow = ({latitude, longitude}) => {

    return (
        <APIProvider apiKey={API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
        <div style={{ height: '50vh', width: '100%' }}>
        <Map
        defaultZoom={13}
        center={{lat: latitude, lng: longitude}}
        onCameraChanged={(ev) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
        </Map>
        
        </div>
        </APIProvider>
    )
}

export default GoogleMapShow;