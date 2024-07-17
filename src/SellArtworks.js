import React, { useState } from 'react';
import './SellArtworks.css'; // Create a separate CSS file for styles

const SellArtworks = () => {
    const [artworkName, setArtworkName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [artworkDescription, setArtworkDescription] = useState('');
    const [price, setPrice] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [imagePreview, setImagePreview] = useState('https://via.placeholder.com/400');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!artworkName || !artistName || !artworkDescription || !price) {
            alert('Please fill in all required fields.');
            return;
        }
        alert('Artwork submitted successfully!');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <header>
                <div className="minimal-header">Sell Artworks</div>
            </header>
            <div className="back-button">
                <a href="../Services.html"><i className="fas fa-arrow-left"></i> Back</a>
            </div>
            <div className="main-container">
                <div className="container">
                    <form id="artworkForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="artworkName">Artwork Name:</label>
                            <input
                                type="text"
                                id="artworkName"
                                name="artworkName"
                                value={artworkName}
                                onChange={(e) => setArtworkName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="artistName">Artist Name:</label>
                            <input
                                type="text"
                                id="artistName"
                                name="artistName"
                                value={artistName}
                                onChange={(e) => setArtistName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="artworkDescription">Artwork Description:</label>
                            <textarea
                                id="artworkDescription"
                                name="artworkDescription"
                                rows="4"
                                value={artworkDescription}
                                onChange={(e) => setArtworkDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price of Piece:</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                min="0"
                                step="100"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="currency">Currency:</label>
                            <select
                                id="currency"
                                name="currency"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="JPY">JPY</option>
                                <option value="KES">KES</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="artworkImage">Upload Artwork Image:</label>
                            <input
                                type="file"
                                id="artworkImage"
                                name="artworkImage"
                                className="file-input"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="image-viewer-container">
                    <div className="image-viewer" id="imageViewer">
                        <img id="imagePreview" src={imagePreview} alt="Artwork Preview" />
                    </div>
                </div>
            </div>

            <div className="back-to-top" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
            <div className="tooltip">Back to top</div>
        </div>
    );
};

export default SellArtworks;
