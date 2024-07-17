// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Artify</div>
      <nav>
        <a href="ArtifyHome.html">Home</a>
        <a href="Gallery.html">Gallery</a>
        <a href="#">About</a>
        <a href="Services.html">Services</a>
        <a href="Blog.html">Blog</a>
        <a href="Contact.html">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
