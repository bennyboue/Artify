import React, { useState } from 'react';
import './ConnectWithArtists.css'; // Create a CSS file for styles

const artists = [
    { name: 'John Doe', bio: 'John Doe is known for his vibrant abstract paintings. Contact: +254 712 345 678', img: '/path/to/artist1.jpg' },
    { name: 'Jane Smith', bio: 'Jane Smith creates stunning contemporary sculptures. Contact: +254 722 456 789', img: '/path/to/artist2.jpg' },
    { name: 'Alex Brown', bio: 'Alex Brown specializes in digital art and illustrations. Contact: +254 733 567 890', img: '/path/to/artist3.jpg' },
    // Add more artists as needed
];

const ConnectWithArtists = () => {
    const [filter, setFilter] = useState('');
    const [selectedArtist, setSelectedArtist] = useState(null);

    const handleFilterChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    };

    const handleCardClick = (artist) => {
        setSelectedArtist(artist);
    };

    const closeModal = () => {
        setSelectedArtist(null);
    };

    return (
        <div>
            <header>
                <div className="logo">Artify</div>
                <nav>
                    <a href="../ArtifyHome.html">Home</a>
                    <a href="../Gallery.html">Gallery</a>
                    <a href="../AboutUs.html">About</a>
                    <a href="../Services.html">Services</a>
                    <a href="../Blog.html">Blog</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

            <div className="container">
                <div className="filter-bar">
                    <input
                        type="text"
                        id="nameFilter"
                        placeholder="Enter artist name to filter..."
                        value={filter}
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="artist-grid">
                    {artists
                        .filter(artist => artist.name.toLowerCase().includes(filter))
                        .map((artist, index) => (
                            <div
                                key={index}
                                className="artist-card"
                                onClick={() => handleCardClick(artist)}
                                data-name={artist.name}
                                data-bio={artist.bio}
                            >
                                <img src={artist.img} alt={artist.name} />
                                <div className="content">
                                    <h3>{artist.name}</h3>
                                    <p>{artist.bio.split(' ')[0]} Artist</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {selectedArtist && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedArtist.img} alt={selectedArtist.name} />
                        <h3>{selectedArtist.name}</h3>
                        <p>{selectedArtist.bio}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConnectWithArtists;
