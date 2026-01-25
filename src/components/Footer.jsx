import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logoImg from '../assets/images/royal_image.png';

const Footer = () => {
  return (
    <footer className="footer-main">
  <div className="footer-container">
    <div className="footer-grid">
      
      {/* Column 1: Brand Info */}
      <div className="footer-column brand-col">
        <div className="brand-logo-text">
          <img src={logoImg} alt="Logo" className="footer-logo" />
          <div className="brand-titles">
            <h2 className="brand-name">ROYAL</h2>
            <h2 className="brand-name">MINDFULNESS</h2>
          </div>
        </div>
        <p className="footer-tagline">ONLINE YOGA RELAXATION CLASSES</p>
        <p className="footer-description">
          "Experience deep relaxation at home with our Online Yoga Classes—your journey to inner peace starts here!"
        </p>
      </div>

      {/* Column 2: Nav Links + Bottom Section (Stacked) */}
      <div className="footer-column center-col">
        <div className='footer-content'>
            <ul className="footer-nav">
            <li><a href="#about">About us</a></li>
            <li><a href="#contact">Contact us</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#trainer">Hire Trainer</a></li>
            </ul>
             {/* Column 3: Social Icons */}
            <div className=" social-col">
                <div className="footer-socials">
                <a href="#" className="social-circle"><FaFacebookF /></a>
                <a href="#" className="social-circle"><FaInstagram /></a>
                <a href="#" className="social-circle"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
        
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom-content">
          <div className="legal-links">
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <p className="copyright">© 2025 Royal Mindfulness</p>
        </div>
      </div>

     

    </div>
  </div>
</footer>
  );
};

export default Footer;