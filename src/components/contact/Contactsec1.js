import React from 'react';
import { Navbar } from '../Navbar';
import fig1 from './other/one.jpg';


export const Contactsec1 = () => {
  const picture = {
    backgroundImage: `url(${fig1})`,
  }
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>
      <div className="container-fluid text-center p-lg-5" style={picture}>
        <h2 className="pt-lg-1 mt-sm-4 display-4 let">Contact</h2>
        <div className="ruler my-3">
          <div className="rulerz"></div>
        </div>
        <p className="letz">Home &gt; Contact Us</p>
      </div>
    </>
  );
};
