import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// TO DO:
// Make this look better. I want the buttons to look bigger. and I dont want the EH
// Maybe find a logo instead of the EH

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li id='eh'><Link to="#">EH</Link></li>
     
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      

    </nav>
  );
};

export default Navbar;
