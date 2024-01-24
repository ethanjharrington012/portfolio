import React, { useState } from 'react';
import './css/genre.css';

const FetchDataComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://portfolio-backend-m01i.onrender.com/get-genre');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
// TO DO:
// Make this look better. It just shows up as very basic

  return (
    <div className="genre-container">
      <h2>Click to get a fun music genre</h2>
      <button 
        onClick={fetchData} 
        disabled={isLoading}
        className="genre-button"
      >
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>
      {data && <div className="genre-data">Your genre is: {data}</div>}
      {error && <div className="genre-error">Error: {error}</div>}
    </div>
  );
};

export default FetchDataComponent;
