// ServicesPage.js
import React from 'react';
import './ServicesPage.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons';

const ServicesPage = () => {
    return (
        <div>
            <header>
                <div className="nav-container">
                    <div className="logo">Artify</div>
                    <nav>
                        <a href="ArtifyHome.html">Home</a>
                        <a href="Gallery.html">Gallery</a>
                        <a href="AboutUs.html">About</a>
                        <a href="Services.html">Services</a>
                        <a href="Blog.html">Blog</a>
                        <a href="Contact.html">Contact</a>
                    </nav>
                </div>
            </header>
            <div className="container">
                <h1>Our Services</h1>
                <div className="service">
                    <div className="service-content">
                        <FontAwesomeIcon icon={faPalette} className="icon" />
                        <div>
                            <a href="Services Subfolder/SellArtPieces.html" className="service-button">Sell Art Pieces</a>
                            <p>We provide a platform for artists to sell their artwork to a global audience.</p>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="service-content">
                        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                        <div>
                            <a href="Services Subfolder/BuyArtPieces.html" className="service-button">Buy Art Pieces</a>
                            <p>Art enthusiasts can discover and purchase unique artwork from talented artists.</p>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="service-content">
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <div>
                            <a href="Services Subfolder/ConnectWithArtists.html" className="service-button">Connect with Artists</a>
                            <p>Our community allows users to connect with artists, collaborate, and share ideas.</p>
                        </div>
                    </div>
                </div>
                <div className="back-button">
                    <a href="ArtifyHome.html" onClick={() => window.history.back()}>Back</a>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
