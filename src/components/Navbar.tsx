import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


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
