import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from './assets/images/ecolink-logo.jpg'; // Add the relative path to your logo image here

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo-container">
                <img src={logoImage} alt="Ecolink Logo" className="logo-image" /> {/* Logo image */}
                <div className="logo">EcoLink</div>
            </div>
            <nav>
                <Link to="/">Discover</Link>
                <Link to="/updates">Updates</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <Link to="/portfolio">Portfolio</Link>
            </nav>
            <div className="user-controls">
                <div className="profile-icon">Login</div>
            </div>
        </header>
    );
};

export default Navbar;


