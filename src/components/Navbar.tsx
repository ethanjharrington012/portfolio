import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li id='eh'><Link to="#">EH</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <button className="dark-mode-toggle" onClick={DarkModeToggle}>Toggle Dark Mode</button>

    </nav>
  );
};

export default Navbar;
