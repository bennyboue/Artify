// GalleryPage.js
import React, { useState } from 'react';
import './GalleryPage.css'; // Import the CSS file

const GalleryPage = () => {
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value.toLowerCase());
    };

    const handleClearFilter = () => {
        setFilterValue('');
    };

    const galleryCards = [
        {
            link: 'https://www.google.com/maps/place/Ardhi+gallery/@-1.3132646,36.8094773,17z/data=!3m1!4b1!4m6!3m5!1s0x182f117e82091851:0xa9edece9f46da4d5!8m2!3d-1.3132646!4d36.8120522!16s%2Fg%2F11tnk3rr8x?entry=ttu',
            imgSrc: '/home/matt/Documents/Artify/download (1).jpeg',
            location: 'Ole Sangale,Ardhi',
            title: 'Gallery in Nairobi',
            address: 'Ole Sangale Link Rd',
        },
        {
            link: 'https://www.google.com/maps/place/Karen+Village/@-1.3295413,36.6783904,17z/data=!3m1!4b1!4m6!3m5!1s0x182f1cbc37d4ad6f:0x791cb7d233a2fc82!8m2!3d-1.3295413!4d36.6809653!16s%2Fg%2F11c1n1qh15?entry=ttu',
            imgSrc: '/home/matt/Documents/Artify/download (2).jpeg',
            location: 'Karen',
            title: 'Gallery in Karen',
            address: 'Ngong Rd',
        },
        {
            link: 'https://www.google.com/maps/search/Global+Trade+Centre+-+Westlands,+Nairobi/@-1.2703348,36.805433,17z?entry=ttu',
            imgSrc: '/home/matt/Documents/Artify/download (3).jpeg',
            location: 'Wayaki Way,GTC',
            title: 'Gallery in Nairobi',
            address: 'Wayaki way, Nairobi',
        },
        // Add more gallery cards as needed
    ];

    return (
        <div>
            <header>
                <div className="logo">Artify</div>
                <nav>
                    <a href="ArtifyHome.html">Home</a>
                    <a href="Gallery.html">Gallery</a>
                    <a href="AboutUs.html">About</a>
                    <a href="Services.html">Services</a>
                    <a href="Blog.html">Blog</a>
                    <a href="Contact.html">Contact</a>
                </nav>
            </header>

            <div className="container">
                <div className="filter-bar">
                    <input
                        type="text"
                        id="locationFilter"
                        value={filterValue}
                        onChange={handleFilterChange}
                        placeholder="Enter location to filter galleries..."
                    />
                    <button onClick={handleClearFilter}>Clear</button>
                </div>
                <div className="gallery-grid" id="galleryGrid">
                    {galleryCards
                        .filter((card) =>
                            card.location.toLowerCase().includes(filterValue)
                        )
                        .map((card, index) => (
                            <a
                                href={card.link}
                                className="gallery-card"
                                data-location={card.location}
                                key={index}
                            >
                                <img src={card.imgSrc} alt={`Gallery ${index + 1}`} />
                                <div className="content">
                                    <h3>{card.title}</h3>
                                    <p>{card.address}</p>
                                </div>
                            </a>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
