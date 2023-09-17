import React, { useState } from 'react';
import axios from 'axios'; 

function LocationFinder() {
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleFindLocation = () => {
   
    const apiKey = 'AIzaSyAtCReJUEfBiHQzxLYT1dLfbtJpXdyx630';
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`)
      .then((response) => {
        const results = response.data.results;
        if (results.length > 0) {
          const location = results[0].geometry.location;
          setLocation(location);
          setError(null);
        } else {
          setLocation(null);
          setError('Location not found');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setLocation(null);
        setError('An error occurred while fetching the location');
      });
  };

  return (
    <div>
      <h1>Location Finder</h1>
      <div  style={{border:"2px solid black"}}>
        <input
          type="text"
          placeholder="Find your location"
          value={address}
          onChange={handleAddressChange}
        />
        <button onClick={handleFindLocation}>Find Location</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
}

export default LocationFinder;
