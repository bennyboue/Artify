// HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    return (
        <div>
            <header>
                <div className="logo">Artify</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="Gallery.html">Gallery</a>
                    <a href="AboutUs.html">About</a>
                    <a href="Services.html">Services</a>
                    <a href="Blog.html">Blog</a>
                    <a href="Contact.html">Contact</a>
                </nav>
            </header>

            <div className="hero">
                <h1>Welcome to Artify</h1>
                <p>Discover, collect, and share art.</p>
                <a href="Signup.html" className="cta-button">Explore Now</a>
            </div>

            <div className="container">
                <h2>Featured Artworks</h2>
                <div className="featured-artworks">
                    <div className="artwork">
                        <img src="C:/Users/benji/Documents/schoolzies/WebApp/Art-main/Artify/vincent-van-gogh-classic-art-painting-wallpaper-preview.jpg" alt="Artwork 1" />
                        <div className="artwork-info">
                            <h3>Classic Art Painting</h3>
                            <p>By Vincent Van Gogh</p>
                        </div>
                    </div>
                    <div className="artwork">
                        <img src="C:/Users/benji/Documents/schoolzies/WebApp/Art-main/Artify/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg" alt="Artwork 2" />
                        <div className="artwork-info">
                            <h3>Artwork Title</h3>
                            <p>By Artist Name</p>
                        </div>
                    </div>
                    <div className="artwork">
                        <img src="C:/Users/benji/Documents/schoolzies/WebApp/Art-main/Artify/anna-kolosyuk-D5nh6mCW52c-unsplash.jpg" alt="Artwork 3" />
                        <div className="artwork-info">
                            <h3>Artwork Title</h3>
                            <p>By Artist Name</p>
                        </div>
                    </div>
                    {/* Add more artworks as needed */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
