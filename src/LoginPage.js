// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === 'pass') {
            setMessage('Login successful!');
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <a href="javascript:history.back()" className="back-arrow">&larr;</a>
            <h2>Login</h2>
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
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
            </div>
            <button onClick={handleLogin}>Login</button>
            <div className="message" style={{ color: message === 'Login successful!' ? 'green' : 'red' }}>
                {message}
            </div>
            <a href="Signup.html" className="signup-link">Don't have an account? Sign up</a>
        </div>
    );
};

export default LoginPage;
