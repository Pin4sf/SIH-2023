
import './App.css';
import Navbar from './navbar';
import Footer from './footer';

import Booking from './booking';
import Pho from "./homwphoto";
import Card from './card';
// import Slider from "./slider"


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Pho/>
   <Booking/>
   <Card/>
   <Footer/>
  
 
  
  
   {/* <Slider/> */}
  
    </div>
  );
}
export default App;
