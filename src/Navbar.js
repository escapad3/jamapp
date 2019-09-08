import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="right">
          <li><Link to="/callback">Callback</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
