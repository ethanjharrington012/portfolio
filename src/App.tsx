import React, { useState, createContext, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


// Create a context for the dark mode state
export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {}
});

export const useDarkMode = () => useContext(DarkModeContext);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
