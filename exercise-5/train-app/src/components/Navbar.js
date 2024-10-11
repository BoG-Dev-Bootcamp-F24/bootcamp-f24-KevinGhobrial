import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Select Your Starting Station</h2>
      <div className="navbar-items">
        <button className="navbar-item">All Stations</button>
        <button className="navbar-item">Chamblee</button>
        <button className="navbar-item">Brookhaven</button>
        <button className="navbar-item">Midtown</button>
        <button className="navbar-item">North Avenue</button>
        <button className="navbar-item">Airport</button>
      </div>
    </nav>
  );
};

export default Navbar;
