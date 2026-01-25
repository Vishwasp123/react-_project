import React, { useState,useEffect } from 'react';
import "./Header.css";
import logoImg from '../assets/images/royal_image.png';
import bookConsulation from "../assets/images/book_1.png"
import hiretrainer from "../assets/images/hireTrainer.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div className='header-root'>    
      <div className='header-section'>
        <nav className="header">
          <div className="header-logo">
            <img
                src={logoImg}
                alt="Royal Mindfulness logo"
                className="logo-icon"
            />

            <div className="logo-text">
                <span className="logo-top">Royal</span>
                <span className="logo-bottom">Mindfulness</span>
            </div>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={isOpen ? "bar open" : "bar"}></span>
            <span className={isOpen ? "bar open" : "bar"}></span>
            <span className={isOpen ? "bar open" : "bar"}></span>
          </button>

          <ul className={`header-nav ${isOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About us</a></li>
            <li><a href="#book" onClick={toggleMenu}>Book Now</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            <li className="login-item">
              <a href="#login" className="login-button">Login</a>
            </li>
          </ul>
        </nav>
        <section className="hero-section">
          <header className="hero">
            <h1>Mental Fitness Trainer for Building Inner strength</h1>
            <p>1-on-1 training, live sessions, Free Consultation</p>
          </header>

          <div className="book-card-wrapper">
            <div className="book-card">
              <img
                src={bookConsulation}
                alt="Book Consultation"
                className="book-consulation1"
              />
              <img
                src={hiretrainer}
                alt="Hire Trainer"
                className="book-consulation1"
              />
            </div>
          </div>

        </section>
      </div>
    </div>
    </> 
  );
}

export default Header;