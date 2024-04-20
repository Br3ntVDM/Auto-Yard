import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NavBar.css';

const NavBar = () => {
  return (
    <header className="app-header">
      <h1 className="app-title-left"><Link to="/">AutoYard</Link></h1>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/sell">Sell Car</Link></li>
          <li><Link to="/buy">Buy Car</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
