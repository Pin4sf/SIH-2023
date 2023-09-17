import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const map = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749, // Replace with your desired latitude
    lng: -122.4194, // Replace with your desired longitude
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAtCReJUEfBiHQzxLYT1dLfbtJpXdyx630"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        {/* Add markers, polygons, or other map components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default map;
