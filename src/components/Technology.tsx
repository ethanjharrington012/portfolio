import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faLaptopCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './css/technology.css';

interface Technology {
    title: string;
    description: string;
    graphic: IconDefinition;
}
const TechnologyBox: React.FC<Technology> = ({ title, description, graphic }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div className="col-md-4 mb-4">
        <div 
          className={`card h-100 border-1 ${isHovered ? 'technology-hovered' : ''} technology-container`} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="graphic-container">
            <FontAwesomeIcon icon={graphic} className="graphic-icon" />
          </div>
          <div className="card-body card-body-custom">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
          </div>
          {isHovered && (
            <Button 
              variant="warning" 
              size="lg"
              className="button-custom"
              onClick={() => window.location.href = '/Projects'}
            >
              Go to Project
            </Button>
          )}
        </div>
      </div>
    );
  };

const TechnologiesSection: React.FC = () => {
    const technologies: Technology[] = [
      {
        title: "Backend Developer",
        description: "Adept at constructing robust server-side applications. Skills in tackling complex coding challenges and efficient data handling. Proficient in Python, Golang, Flask, Django, Node.js, and Express.",
        graphic: faTerminal
      },
      {
        title: "Frontend Developer",
        description: "Focus on creating engaging, user-friendly interfaces. Expertise in writing clean, maintainable code with HTML, CSS, Javascript, TypeScript, and React.",
        graphic: faLaptopCode 
      },
      {
        title: "Leadership",
        description: "Demonstrated initiative in leading projects, guiding design and implementation with detail-oriented approach. Proficient in project management and effective communication.",
        graphic: faUser
      }, 
    ];
    return (
        <div className="container">
          <div className="row justify-content-center">
            {technologies.map(tech => (
              <TechnologyBox 
                key={tech.title} 
                title={tech.title} 
                description={tech.description} 
                graphic={tech.graphic} 
              />
            ))}
          </div>
        </div>
      );
    };
    

  
export default TechnologiesSection;