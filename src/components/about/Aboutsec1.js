import React from 'react';
import { Navbar } from '../Navbar';
import fig1 from './other/one.jpg';


export const Aboutsec1 = () => {
  const picture = {
    backgroundImage: `url(${fig1})`,
  }
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>
      
      {/* <!-- section 1 --> */}
      <div className="container-fluid firstpic text-center p-3" style={picture}>
        <div className="pt-5">
          <h4 className="pt-lg-1">About Us</h4>
          <div className="line my-3">
            <div className="title-line"></div>
          </div>
          <p>Home &gt; About Us</p>
        </div>
      </div>
      {/* <!-- section 1 --> */}
    </>
  );
};
