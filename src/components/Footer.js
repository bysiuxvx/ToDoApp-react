import React from 'react';
import '../styles/footer.css';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Created in 2021 by{' '}
        <span
          className="githubProfile"
          onClick={(event) => {
            window.open('https://github.com/bysiuxvx/', '_blank');
          }}
          onAuxClick={(event) => {
            window.open('https://github.com/bysiuxvx/', '_blank');
          }}>
          Patryk Byszek
        </span>
      </p>
      <FaGithub
        className="githubLogo"
        onClick={(event) => {
          window.open('https://github.com/bysiuxvx/ToDoApp', '_blank');
        }}
        onAuxClick={(event) => {
          window.open('https://github.com/bysiuxvx/ToDoApp', '_blank');
        }}
      />
    </div>
  );
};

export default Footer;
