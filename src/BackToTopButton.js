// src/components/BackToTopButton.js
import React from 'react';
import './BackToTopButton.css';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTopButton;
