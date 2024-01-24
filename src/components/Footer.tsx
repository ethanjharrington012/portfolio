import React from "react";

interface FooterProps {
  email: string;
  githubUrl: string;
  linkedInUrl: string;
  repositoryUrl: string;
}
// TO DO:
// instead of having the socials being a lonk. Make them into ICONs

const Footer: React.FC<FooterProps> = ({ email, githubUrl, linkedInUrl, repositoryUrl }) => {
  return (
    <footer style={{ 
        background: 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)',
        backgroundBlendMode: 'multiply',
        color: 'white', 
        padding: '20px', 
        textAlign: 'center' 
    }}>
      <p>Contact me: <a href={`mailto:${email}`} style={{ color: 'white' }}>Email</a></p>
      <p>
        Follow me on: 
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '10px' }}>GitHub</a> | 
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '10px' }}>LinkedIn</a>
      </p>
      <p>WANT TO SEE THE CODE FOR THIS BACKEND?</p>
      <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
        <button style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Repository
        </button>
      </a>
    </footer>
  );
};

export default Footer;
