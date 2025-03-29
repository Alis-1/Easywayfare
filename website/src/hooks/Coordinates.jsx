import React from 'react';
import api_key from '../../apiFolder/api';

const API_KEY = api_key;
const fetchCoordinates = (address) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},&key=${API_KEY}`, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'OK' && data.results.length > 0) {
          const latitude = data.results[0].geometry.location.lat
          const longitude = data.results[0].geometry.location.lng
          return {latitude,longitude}
        } else {
          console.error("No results found or invalid response: ", data.status)
          return null
        }
      })
      .catch(error => {
        console.error("Error fetching coordinates: ", error)
        return null
      })
}

export default fetchCoordinates;
