import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import blur_isaac from '../assets/images/blur_isaac.jpg'
interface Project {
  id: number;
  name: string;
  description: string;
  githubLink: string;
}

const projects: Project[] = [
  // Add your project details here
  { id: 1, name: 'Project One', description: 'This is a great project.', githubLink: 'https://github.com/yourusername/project-one' },
  { id: 2, name: 'PRoject Two', description: 'second fun project', githubLink:'to the link' }
];

const Projects: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <h1>My Projects</h1>
        <ProjectCard
        title="My Project"
        description="This is a description of my project."
        image={blur_isaac}
        link="http://link_to_the_project.com"/>
        {projects.map(project => (
            <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
