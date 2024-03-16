import React from 'react';
import './Footer.css';
// Icons from react-icons (make sure to install the react-icons package)
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import ecoLinkLogo from './assets/images/ecolink-logo.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>INVESTING</h4>
                    <ul>
                        <li>Investment Opportunities</li>
                        <li>Fees</li>
                        <li>Investor Returns</li>
                        <li>Tax Relief</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>RAISING</h4>
                    <ul>
                        <li>Due Diligence Charter</li>
                        <li>Raise</li>
                        <li>Secondary Share Sale</li>
                        <li>Partnerships</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>ABOUT</h4>
                    <ul>
                        <li>EcoLink</li>
                        <li>Careers</li>
                        <li>News</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <FaLinkedin />
                    <FaInstagram />
                </div>
            </div>
            <div className="footer-legal">
                <p>EcoLink Ltd is authorised and regulated by the Financial Conduct Authority (No. 650205).</p>
                <div className="legal-links">
                    <a href="#">Risk Warning</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">MIFIDRP Disclosure</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

