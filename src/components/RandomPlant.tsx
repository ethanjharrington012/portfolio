import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/RandomPlant.css'; // Ensure you create and link this CSS file

interface Plant {
  common_name: string;
  scientific_name: string;
  sunlight: string[];
  watering: string;
}

const RandomPlant: React.FC = () => {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPlant = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://portfolio-backend-m01i.onrender.com/get-random-plant');
      const data = await response.json();
      setPlant(data);
    } catch (error) {
      console.error('Error fetching plant:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="random-plant-container">
      <Button onClick={fetchPlant} disabled={isLoading} className="fetch-plant-btn">
        {isLoading ? 'Loading...' : 'Get Random Plant'}
      </Button>
      {plant && (
        <div className="plant-info">
          <h3>{plant.common_name}</h3>
          <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
          <p><strong>Sunlight:</strong> {plant.sunlight.join(', ')}</p>
          <p><strong>Watering:</strong> {plant.watering}</p>
        </div>
      )}
    </div>
  );
};

export default RandomPlant;
