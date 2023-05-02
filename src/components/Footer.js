import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed-bottom  w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-2">
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Isoyor Kubiti.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
