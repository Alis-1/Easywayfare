import React, { useEffect, useState } from "react"
import api_key from "../../apiFolder/api"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import GoogleMapShow from '../components/GoogleMap';



const API_KEY = api_key



const SearchBarGoogle = () => {

  const [address, setAddress] = useState("")
  const [latitude, setLatitude] = useState(60.44912298918426)
  const [longitude, setLongitude] = useState(22.29554469416289)
  
  

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })
  useEffect(() => {
    // Dynamically load the Google Maps Extended Component Library
    const script = document.createElement("script")
    script.src = "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js"
    script.type = "module"
    document.head.appendChild(script)

    
    return () => {
      document.head.removeChild(script); // Clean up on component unmount
    }
  }, [])


  const handleButtonPress = () => {
    const picker = document.getElementById('place-picker')

    if (picker && picker.value) {
      const selectedAddress = picker.value.formattedAddress
      console.log("Selected address: ", selectedAddress)
      setAddress(selectedAddress)
    }
    else {
      console.log("No address selected")
    }
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},+CA&key=${API_KEY}`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'OK' && data.results.length > 0) {
        const latitude = data.results[0].geometry.location.lat
        const longitude = data.results[0].geometry.location.lng
        setLatitude(latitude)
        setLongitude(longitude)
      } else {
        console.error("No results found or invalid response: ", data.status)
      }
    })
    console.log(latitude)
    console.log(longitude)
  }

  

  return (
    <div id="place-picker-box">
      <gmpx-api-loader key={API_KEY} solution-channel="GMP_GE_placepicker_v2">
        <div id="place-picker-container">
          <gmpx-place-picker placeholder="Enter an address" id="place-picker"></gmpx-place-picker>  
          <input name="address" type="hidden" id="selected-address"/>
        </div>
      </gmpx-api-loader>
      <button onClick={handleButtonPress}>Log Address</button>
      <GoogleMapShow latitude={latitude} longitude={longitude}></GoogleMapShow>
    </div>
  )
}

export default SearchBarGoogle