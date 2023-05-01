// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [navLinksVisible, setNavLinksVisible] = useState(false);
    const logoPath = process.env.PUBLIC_URL + '/images/logo512.png';

    const toggleNavLinks = () => {
        setNavLinksVisible(!navLinksVisible);
    };
    console.log("enter navbar");

    return (
        <header>
            <nav className="navbar">
                {/* <a href={localLogo} target="_blank" rel="noopener noreferrer" className="logo"> */}
                <a href={logoPath} target="_blank" rel="noopener noreferrer" className="thelogo">
                    <img src={logoPath} alt="logo" height="30" />
                </a>
                <ul className={`nav-links ${navLinksVisible ? 'show' : ''}`}>
                    <li><a href={'/'}>Home</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/resume'}>Resume</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/publications'}>Publications</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/service'}>Services</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/contact'}>Contact</a></li>
                </ul>
                <button className="menu-toggle" onClick={toggleNavLinks}>Menu</button>
            </nav>
        </header>
    );
};

export default Navbar;
