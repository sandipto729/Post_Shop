import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaTwitter,
    FaGooglePlusG,
    FaLinkedin,
    FaMapMarkerAlt
} from "react-icons/fa";
import "./styles/Footer.css";
import footLogo from "./../../assest/India-Post_Preview.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer_top">
                <div className="top_container">
                    <h2>Indian Post</h2>
                    <h4>Connect with the rich traditions of Indian craftsmanship and culture—where heritage meets the heart!</h4>
                    <ul className="top_social-links">
                        <li><a href="https://www.facebook.com/p/Sri-Ramakrishna-Siksha-Niketan-100057181941594/" target="_blank" rel="noopener noreferrer"><FaFacebook className="fab" aria-hidden="true" /></a></li>
                        <li><a href="#"><FaTwitter className="fab" aria-hidden="true" /></a></li>
                        <li><a href="#"><FaGooglePlusG className="fab" aria-hidden="true" /></a></li>
                        <li><a href="#"><FaLinkedin className="fab" aria-hidden="true" /></a></li>
                        <li><a href="https://maps.app.goo.gl/35NpYHhCWGmScs8RA" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="fab" aria-hidden="true" /></a></li>
                    </ul>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-top">
                    <div className="comp-logo">
                        <Link className="logo-link" to='/'>
                            <img className="logo-svg" src={footLogo} alt="infoma logo" />
                            Indian Post
                        </Link>
                    </div>
                    <div className="filler-text">Celebrate the vibrant essence of India—one handcrafted treasure at a time</div>
                    <div className="social">
                        <a className="social-link" href="#"><FaMapMarkerAlt className="fab_logo" aria-hidden="true" style={{ color: '#0d7e20' }} /></a>
                        <a className="social-link" href="#"><FaLinkedin className="fab_logo" aria-hidden="true" style={{ color: '#007bb6' }} /></a>
                        <a className="social-link" href="https://www.facebook.com/p/Sri-Ramakrishna-Siksha-Niketan-100057181941594/"><FaFacebook className="fab_logo" aria-hidden="true" style={{ color: '#3b5998' }} /></a>
                        <a className="social-link" href="#"><FaTwitter className="fab_logo" aria-hidden="true" style={{ color: '#00aced' }} /></a>
                    </div>
                </div>

                <div className="footer-grid">
                    <div className="footer-grid-column">
                        <div className="footer-grid-heading">Products</div>
                        <ul className="footer-links-list">
                            <li><a href="#overview" className="footer-link">Overview</a></li>
                            <li><a href="#overview" className="footer-link">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-grid-column">
                        <div className="footer-grid-heading">Company</div>
                        <ul className="footer-links-list">
                            <li><a href="#overview" className="footer-link">About</a></li>
                        </ul>
                    </div>
                    <div className="footer-grid-column">
                        <div className="footer-grid-heading">Support</div>
                        <ul className="footer-links-list">
                            <li><a href="#overview" className="footer-link">Contact</a></li>
                            <li><a href="#overview" className="footer-link">Chat</a></li>
                            <li><a href="#overview" className="footer-link">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-grid-column">
                        <div className="footer-grid-heading">Legal</div>
                        <ul className="footer-links-list">
                            <li><a href="tandc.html" className="footer-link" target="main">Terms of Service</a></li>
                            <li><a href="privacypolicy.html" className="footer-link" target="main">Privacy Policy</a></li>
                            <li><a href="#cookie" className="footer-link">Cookie Settings</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="footer-copyright">
                <p>© 2024 - Present Inadian Post. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
