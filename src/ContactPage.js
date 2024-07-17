// ContactPage.js
import React from 'react';
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
    const submitContactForm = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        // Logic to handle the contact form submission (e.g., send data to a server)
        alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
        // Optionally, clear the form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                    <a href="#">Contact</a>
                </nav>
            </header>

            <div className="container">
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <input type="text" id="name" placeholder="Your Name" required />
                    <input type="email" id="email" placeholder="Your Email" required />
                    <input type="tel" id="phone" placeholder="Your Phone Number" />
                    <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
                    <button onClick={submitContactForm}>Submit</button>
                </div>
            </div>

            <div className="back-to-top" onClick={scrollToTop}>
                <i className="fas fa-arrow-up"></i>
            </div>
            <div className="tooltip">Back to top</div>
        </div>
    );
};

export default ContactPage;
