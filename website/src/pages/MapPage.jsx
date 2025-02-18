import React from 'react';
import '../App.css';
import Logo from '../components/Logo';
import useFetch from '../hooks/UseFetch';
import GoogleMapShow from '../components/GoogleMap';

const MapPage = () => {
    return (
        <GoogleMapShow></GoogleMapShow>
    )
}

export default MapPage;