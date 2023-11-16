import React from "react";

interface FooterProps {
  email: string;
  githubUrl: string;
  linkedInUrl: string;
  repositoryUrl: string;
}

const Footer: React.FC<FooterProps> = ({ email, githubUrl, linkedInUrl, repositoryUrl }) => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center' }}>
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
