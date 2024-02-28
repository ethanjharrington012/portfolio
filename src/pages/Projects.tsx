import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
// import RandomPlant from '../components/RandomPlant';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RandomPlant from '../components/RandomPlant';
import './css/projects.css';

import GolangQuiz from '../assets/images/GoQuiz.png'
import PineSapBackend from '../assets/images/PineSapBackend.png'
import Heros from '../assets/images/pineSapFrontend.png'


interface Project {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  image: string; 
}
 
  const projects: Project[] = [
    { 
      id: 1, 
      name: 'Go Quiz', 
      description: 'This is a basic quiz coded in Go', 
      githubLink: 'https://github.com/ethanjharrington012/go_quiz.git',
      image: GolangQuiz // Assign GolangQuiz image
    },
    { 
      id: 2, 
      name: 'Pine Sap Backend', 
      description: 'Backend for a full stack project using Flask and Python', 
      githubLink: 'https://github.com/ethanjharrington012/pine-sap-backend.git',
      image: PineSapBackend // Assign PineSapBackend image
    },
    {
      id: 3,
      name: 'Heros Front End',
      description: 'Full Stack Application using React and Typescript',
      githubLink: 'https://github.com/ethanjharrington012/hero-react.git',
      image: Heros
    }
    // Add more projects if needed
  ];
  const Projects: React.FC = () => {
    return (
      <div className="projects-container">
        <Navbar/>
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <Card key={project.id} className="project-card">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.githubLink} target="_blank">View on GitHub</Button>
                {project.name === 'Heros Front End' && (
                  <Button variant="secondary" href="https://heroinventory114.web.app/" target="_blank" className="mt-2">Live</Button> // Replace with actual live link
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
        <RandomPlant/>
        <h2>Why this API?</h2>
        <p className="api-description">Well, with my background in Tree Work,<br/>I thought it would be fun to combine my knowledge of trees and plants with my love for coding.<br/> 
        So, using the Plant Fact API, I made the backend using Flask and Python, hosted on Render.</p>
        <Footer

        email="ethanjharrington012@gmail.com"
        githubUrl="https://github.com/ethanjharrington012"
        linkedInUrl="https://www.linkedin.com/in/ethan-harrington-000688267/"
        repositoryUrl="https://github.com/ethanjharrington012/Portfolio-Backend"
      />
      </div>
    );
  };

export default Projects;
