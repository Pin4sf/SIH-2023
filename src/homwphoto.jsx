import React from 'react';
import Bus from './photo.jpg';

const homwphoto = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img  style={{width:"100%"}} src={Bus} alt="" />

      {/* Text overlay */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        //   backgroundColor: 'rgba(0, 0, 0, 0.7)',
        background: 'linear-gradient(to bottom, #ff6b6b, #ffa07a)',
        
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <h2>HIMACHAL PRADESH</h2>
        <h3>BUS SERVICE</h3>
      </div>
    </div>
  );
};

export default homwphoto;
