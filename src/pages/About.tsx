import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FetchDataComponent from '../components/FetchData';
import TechnologiesSection from '../components/Technology';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/About.css'
import myface from '../assets/images/myFace.png'
import undraw from '../assets/images/undraw_in_sync_re_jlqd.svg'
import headShot from '../assets/images/headshot.jpeg'
const About: React.FC = () => {

  const email = "ethanjharrington012@gmail.com";
  const githubUrl = "https://github.com/ethanjharrington012";
  const linkedInUrl = "https://www.linkedin.com/in/ethan-harrington-000688267/";
  const repositoryUrl = "gh repo clone ethanjharrington012/Portfolio-Backend";

// TO DO:
// Add a section for testimonials
// Add a link to open my resume.

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div className="titles-container">
        <h2>Backend,</h2>
        <h2>Frontend,</h2>
        <h2>Leadership</h2>
      </div>
      <div className="profile-picture-container">
        {/* Replace 'path_to_your_image.jpg' with the actual path to your image */}
        <img src={ headShot }  alt="Profile" className="profile-picture" />
      </div>
      {/* Placeholder for another image */}
      <div className="undraw-container">
        <img src={undraw} alt="Creative Team" />
      </div>
          <main className="container my-5">
          <div className="about-container">
            <h1>About Me</h1>
            <p className='about-me'>
              Hi, I'm Ethan Harrington, a dedicated tech enthusiast who pivoted to software development after a rich journey in data and coding. My training at Coding Temple honed my skills in Python, JavaScript, and React, leading me to craft dynamic web applications like 'Pine Sap'.
            </p>
            <p className='about-me'>
              At Blue Spruce in Maine, I combined technical know-how with strategic project management, showcasing my adaptability and commitment to excellence. I'm passionate about solving complex problems and continuously evolving in the fast-paced world of technology.
            </p>
          </div>
        </main>

      <TechnologiesSection/>
      <FetchDataComponent/>
      <Footer email={email} githubUrl={githubUrl} linkedInUrl={linkedInUrl} repositoryUrl={repositoryUrl} />
    </div>
  );
};


export default About;