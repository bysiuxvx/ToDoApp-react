import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Created in 2021 by{' '}
        <span
          className="githubProfile"
          onClick={() => {
            window.open('https://github.com/bysiuxvx/weather-app', '_blank');
          }}>
          Patryk Byszek
        </span>
      </p>
    </div>
  );
};

export default Footer;
