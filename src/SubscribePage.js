// SubscribePage.js
import React, { useState } from 'react';
import './SubscribePage.css'; // Import the CSS file

const SubscribePage = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email) {
            window.location.href = 'subscription-success.html';
        }
    };

    return (
        <div className="container">
            <h1>Subscribe to Artify Blog</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="submit"
                    value="Subscribe"
                />
            </form>
        </div>
    );
};

export default SubscribePage;
