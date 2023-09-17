// HomePage.js
import React from 'react';

import Button from 'react-bootstrap/Button';
const homeee = () => {
  return (
    <div className="homepage" style={{border:"2px solid blue",backgroundImage:"https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww&w=1000&q=80"}}>
     
<img src="" alt="" />
      <main className="main-content" style={{backgroundImage:"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzfGVufDB8fDB8fHww&w=1000&q=80"}}>
        {/* Main content */}
        <h1>Welcome to 
        <br/> Google
          Maps Platform</h1>
        <p>Build customized, location-based applications with Google Maps.</p>
        <Button variant="primary">Get Started</Button>{' '}
      </main>
    </div>
  );
};

export default homeee;
