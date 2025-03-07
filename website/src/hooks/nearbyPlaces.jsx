import React from "react";
import api_key from "../../apiFolder/api";

const API_KEY = api_key;

const fetchNearbyPlaces = (latitude, longitude) => {
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json
  ?keyword=cruise
  &location=${latitude}%2c${longitude}
  &radius=1500
  &type=restaurant
  &key=${API_KEY}`, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'OK' && data.results.length > 0) {
            
        } else {
          console.error("No results found or invalid response: ", data.status)
          return null
        }
      })
      .catch(error => {
        console.error("Error fetching nearby places: ", error)
        return null
      })
    }

export default fetchNearbyPlaces;

