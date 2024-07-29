
"use client";

import React, { useState } from 'react';

import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6'; 
import './page.css';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      console.log('Form submitted with email:', email);
    } else {
      setError('Email address is not valid');
    }
  };

  return (
    <div className="contactSection" id="contact">
      <div className="newsletter">
        <h3>Join our newsletter</h3>
        <p>Pawprint that has been for pets.</p>
        <form className="newsletterForm" onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={error ? 'inputError' : ''}
            />
            <button type="submit">Subscribe</button>
          </div>
          {error && <p className="errorMessage">{error}</p>}
        </form>
      </div>
      <footer className="footer">
        <div className="footerContent">
          <div className="footerColumn">
            <h2>Pawprints</h2>
            <h4 className="h4QuickLinks">QUICK LINKS</h4>
            <ul className="one">
              <li><a href="#about">About Us</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#media">Media</a></li>
            </ul>
          </div>
          <div className="footerColumn">
            <h4 className="h4Resources">RESOURCES</h4>
            <ul className="two">
              <li><a href="#animal-safety">Animal Safety</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#alumni">Alumni</a></li>
            </ul>
          </div>
          <div className="footerColumn">
            <h4 className="h4WaysToGive">WAYS TO GIVE</h4>
            <ul className="three">
              <li><a href="#find-a-family">Find a Family</a></li>
              <li><a href="#donate">Donation</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#give-a-gift">Give a Gift</a></li>
            </ul>
          </div>
          <div className="footerColumn">
            <h4 className="h4SocialMedia">SOCIAL MEDIA</h4>
            <p className='four'>Follow us on social media to find out the latest updates on our progress.</p>
            <ul className="socialMediaIcons">
              <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a></li>
              <li><a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; 2024 Pawprints. All Rights Reserved.</p>
          <ul>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
