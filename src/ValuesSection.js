// src/components/ValuesSection.js
import React from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
  return (
    <section className="values-section">
      <h2>Our Values</h2>
      <ul className="values-list">
        <li><i className="fas fa-paint-brush"></i> Creativity: We celebrate and encourage creative expression in all its forms.</li>
        <li><i className="fas fa-globe"></i> Inclusivity: We believe art should be accessible to everyone, everywhere.</li>
        <li><i className="fas fa-hand-holding-heart"></i> Support: We are committed to supporting artists at every stage of their careers.</li>
        <li><i className="fas fa-seedling"></i> Growth: We strive to help artists grow their audience and their business.</li>
        <li><i className="fas fa-users"></i> Community: We foster a strong, supportive community of artists, collectors, and art lovers.</li>
      </ul>
    </section>
  );
};

export default ValuesSection;
