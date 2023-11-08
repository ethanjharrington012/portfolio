import React from 'react';
import { useDarkMode } from '../App'

const DarkModeToggle = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
  );
};

export default DarkModeToggle;
