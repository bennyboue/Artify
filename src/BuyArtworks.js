import React from 'react';
import './BuyArtworks.css'; // Create a CSS file for styles

const artworks = [
    { id: 1, title: 'Artwork Title 1', artist: 'Artist Name 1', price: '$200', img: 'artwork1.jpg' },
    { id: 2, title: 'Artwork Title 2', artist: 'Artist Name 2', price: '$300', img: 'artwork2.jpg' },
    { id: 3, title: 'Artwork Title 3', artist: 'Artist Name 3', price: '$400', img: 'artwork3.jpg' },
    { id: 4, title: 'Artwork Title 4', artist: 'Artist Name 4', price: '$500', img: 'artwork4.jpg' },
    { id: 5, title: 'Artwork Title 5', artist: 'Artist Name 5', price: '$600', img: 'artwork5.jpg' },
];

const BuyArtworks = () => {
    return (
        <div>
            <header>
                <h1>Buy Artworks</h1>
            </header>
            <div className="back-button">
                <a href="../Services.html"><i className="fas fa-arrow-left"></i> Back</a>
            </div>
            <div className="container">
                {artworks.map(artwork => (
                    <a key={artwork.id} href="artwork_detail.html" className="artwork">
                        <img src={artwork.img} alt={artwork.title} />
                        <div className="artwork-details">
                            <div className="artwork-title">{artwork.title}</div>
                            <div className="artwork-artist">By: {artwork.artist}</div>
                            <div className="artwork-price">{artwork.price}</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BuyArtworks;
