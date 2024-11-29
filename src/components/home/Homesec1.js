import React from 'react'
import pic1 from './images/one.jpg'
import { Navbar } from '../Navbar';



export const Homesec1 = () => {
  const figure = {
    backgroundImage:`url(${pic1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>

  {/* <!--section 1--> */}
  <header className="section-1" style={figure}>
    <div className="container text-center text-white">
      <h1 className="display-4 fs-0.2 mb-lg-5">Reliable Drivers</h1>
      <div className="line">
        <div className="title-line mt-lg-4 my-3"></div>
      </div>
      <p className="lead fs-5 mt-lg-3">Expect only the best from our wide array of professionally trained drivers.<br /> They
        will get you there on time!</p>
      <a href="#" className="btn btn-danger btn-lg mt-lg-5" style={{fontSize: "12px", borderRadius: "30px"}}>About Us </a>
    </div>
  </header>
    </>
  );
};
