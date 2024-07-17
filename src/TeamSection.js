// src/components/TeamSection.js
import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="/home/matt/Documents/Artify/WhatsApp Image 2024-05-05 at 10.24.01 PM.jpeg" alt="Matthew Mungai" />
          <h3>Matthew Mungai</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Benjamin M'bekheh" />
          <h3>Benjamin M'bekheh</h3>
          <p>Co-Founder & CEO</p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
