import React from 'react';
import './style2.css'; // Import your CSS file
import Button from 'react-bootstrap/Button';
function dhr() {
  return (
    <div>
      <div className="nav">
        <h1 id="heading1">SIH</h1>
        <span>
        <Button variant="primary">Get Started</Button>{' '}
        </span>
      </div>
      <div className="row">
        <span>
          <input className="balloon" id="state" type="text" placeholder="Starting location..." /><label htmlFor="state">From</label>
        </span>
        <span>
          <input className="balloon" id="planet" type="text" placeholder="Ending Location..." /><label htmlFor="planet">To</label>
        </span>
        <span>
          <input className="balloon" id="galaxy" type="date" placeholder="" required/><label htmlFor="galaxy">Date</label>
        </span>
        <h2 id="heading">Popular Route</h2>
        <main className="page-content">
          <div className="card">
            <div className="content">
              <h2 className="title">Shimla to Kasauli</h2>
              <p className="copy">Buses are available</p>
              <button className="btn">View Trips</button>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Malana to Dalhousie</h2>
              <p className="copy">Buses are available</p>
              <button className="btn">View Trips</button>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Chail to Kasol</h2>
              <p className="copy">It's the desert you've always dreamed of</p>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Chail to Kasauli</h2>
              <p className="copy">Seriously, straight up, just blast off into outer space today</p>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default dhr;
