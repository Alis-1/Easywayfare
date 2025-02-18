import api_key from "../../apiFolder/api"
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import "../styles/Map.css"
const API_KEY = api_key;


const GoogleMapShow = () => {

    return (
        <APIProvider apiKey={API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
        <div style={{ height: '50vh', width: '100%' }}>
        <Map
        defaultZoom={13}
        defaultCenter={{ lat: 60.454510, lng: 22.264824 }}
        onCameraChanged={(ev) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
        </Map>
        
        </div>
        </APIProvider>
    )
}

export default GoogleMapShow;