import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./booking.css"
function TicketBooking() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = () => {
    // Handle booking logic here
    alert(`Booking from ${from} to ${to} on ${date}`);
  };

  const handleLabel = () => {
    if(from!=="")
    {
document.getElementById("depart").innerText="";

    }
    if(to!=="")
    {
document.getElementById("dst").innerText="";

    }
    if(date!=="")
    {
document.getElementById("dste").innerText="";

    }

  }

  return (
    // <div   style={{border:"3px solid green",backgroundColor:"#feffea"}} >  
    //   <label>
    //     From:
    //     <input  style={{border:"3px solid green"}}
    //       type="text"
    //       value={from}
    //       onChange={(e) => setFrom(e.target.value)}
    //       placeholder="Enter departure location"
    //     />
    //   </label>
    //   <label>
    //     To:
    //     <input  style={{border:"3px solid green"}}
    //       type="text"
    //       value={to}
    //       onChange={(e) => setTo(e.target.value)}
    //       placeholder="Enter destination location"
    //     />
    //   </label>
    //   <label>
    //     Date:
    //     <input  style={{border:"3px solid green"}}
    //       type="date"
    //       value={date}
    //       onChange={(e) => setDate(e.target.value)}
    //     />
    //   </label>
    //   <Button variant="primary" onClick={handleBooking} >Book Ticket</Button>{' '}
    //   {/* <button onClick={handleBooking}>Book Ticket</button> */}
    // </div>
<div className='outer'>

  <span> 

       <input   class="balloon" id="state"   
         type="text"
         value={from}
         onChange={(e) => setFrom(e.target.value)}
          placeholder="Enter departure location"

        />
        <label for="State" id="depart">Departure</label> 
    {/* <input class="balloon" id="state" type="text" placeholder="Liquid, solid, gaseous..."     /><label for="state">State</label> */}
  </span>
  <span>

       <input  class="balloon" id="planet"  
            onClick={handleLabel}
           type="text"
           value={to}
        onChange={(e) => setTo(e.target.value)}
          placeholder="Enter destination location"
         />
<label for="planet" id="dst">Destination</label>
    {/* <input class="balloon" id="planet" type="text" placeholder="Probably Earth" /><label for="planet">Planet</label> */}
  </span>
  <span>


       <input  class="balloon" id="galaxy" 
        onClick={handleLabel}
           type="date"
           value={date}
           onChange={(e) => setDate(e.target.value)}
           required
        />  
        <label for="planet" id="dste">Date</label>
    {/* <input class="balloon" id="galaxy" type="text" placeholder="Milky Way?" /><label for="galaxy">Galaxy</label> */}
  </span>
    <Button variant="primary" onClick={handleBooking} >Book Ticket</Button>{' '}
      {/* <button onClick={handleBooking}>Book Ticket</button> */}
      </div>
  );
}

export default TicketBooking;
