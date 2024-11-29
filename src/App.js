import React from'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage.js';
import Aboutpage from './components/Aboutpage.js';
import Contactpage from './components/Contactpage.js'; 
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div>
    
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/contact" element={<Contactpage/>}/>
    </Routes>

  

     
    </div>
  );
}

export default App;
