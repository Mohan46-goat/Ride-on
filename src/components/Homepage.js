import React from 'react'
import { Homesec1 } from './home/Homesec1.js';
import { Homesec2 } from './home/Homesec2.js';
import { Homesec3 } from './home/Homesec3.js';
import { Homesec4 } from './home/Homesec4.js';
import { Homesec5 } from './home/Homesec5.js';
import { Foot } from './Foot.js';
import './Homepage.css';
import Caro from './home/CarouselOne.js';
import Caro2 from './home/CarouselTwo.js';


 const Homepage = () => {
  return (
    <>
    <Homesec1 />
    <Homesec2 />
    <Homesec3 />
    <Caro />
    <Homesec4 />
    <Homesec5 />
    <Caro2 />
    <Foot />
    </>
  );
};
export default Homepage;