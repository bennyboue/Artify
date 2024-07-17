// SignUpPage.js
import React, { useState } from 'react';
import './SignUpPage.css'; // Import the CSS file

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = () => {
        if (username && email && password) {
            setMessage('Sign up successful!');
            document.getElementById('message').style.color = 'green';
        } else {
            setMessage('Please fill in all fields.');
            document.getElementById('message').style.color = 'red';
        }
    };

    return (
        <div className="signup-container">
            <a href="ArtifyHome.html" className="back-arrow">&larr;</a>
            <h2>Sign Up</h2>
            <div className="input-group">
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="username">Username</label>
            </div>
            <div className="input-group">
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
            </div>
            <button onClick={handleSignup}>Sign Up</button>
            <div className="message" id="message">{message}</div>
            <a href="Login.html" className="login-link">Already have an account? Login</a>
        </div>
    );
};

export default SignUpPage;
