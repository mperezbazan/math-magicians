import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="header-container">
    <div className="logo-container">
      <p className="logo-text">Math Magicians</p>
    </div>
    <nav className="nav-container">
      <ul className="nav-links-container">
        <li className="nav-link-item"><NavLink to="/">Home</NavLink></li>
        <li className="nav-link-item"><NavLink to="/calculator">Calculator</NavLink></li>
        <li className="nav-link-item"><NavLink to="/quote">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
