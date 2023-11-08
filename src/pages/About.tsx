import React, { useState } from 'react';
import Navbar from '../components/Navbar';


const About: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <h1>About Me</h1>
      <p>This is the about page where you can introduce yourself.</p>
      {/* Add your details here */}
    </div>
  );
};



export const PlantFact: React.FC = () => {
  const [fact, setFact] = useState<string | null>(null);

  const getPlantFact = async () => {
    const apiKey = 'sk-tNg6654a89a4bda6b2865'; // This is not secure.
    const endpoint = `https://some-plant-api.com/facts?apiKey=${apiKey}`;
    
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (response.ok) {
        setFact(data.fact);
      } else {
        throw new Error(data.message || 'Error fetching plant fact.');
      }
    } catch (error: any) {
      console.error('Fetching plant fact failed:', error.message);
      setFact('Could not load a plant fact at this time.');
    }
  };

  return (
    <div>
      <button onClick={getPlantFact}>Get a Plant Fact</button>
      {fact && <p>{fact}</p>}
    </div>
  );
};




export default About;
