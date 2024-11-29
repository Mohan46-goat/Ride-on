import React from 'react'
import {NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    {/* <!--nav bar--> */}
  {/* <div className="container-fluid"> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navv">
      <a className="navbar-brand text-danger ms-3" href="#">Ride On</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-nav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ms-3" id="navbar-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <NavLink className='nav-link' to="/">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className='nav-link' to="/about">About</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className='nav-link' to="/contact">Contact Us</NavLink>
          </li>
        </ul>

      </div>
      <div className="my-2 my-lg-0 me-lg-5 me-auto">
        <span className="text-white"><i className="bi bi-search ms-4"></i></span>
      </div>
    </nav>

  {/* <!--nav bar--> */}
    </>
  )
}
