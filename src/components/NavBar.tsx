// src/components/NavBar.tsx

"use client"; 

import React from 'react';
import styles from './Navbar.module.css';

const NavBar: React.FC = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <span className={styles.pawPrints}>Paw Prints</span>
        </li>
        <li className={styles.navItem}>
          <a href="#campaigns-topics" onClick={() => handleScroll('campaigns-topics')} className={styles.navLink}>
            Campaigns and Topics <span className={styles.arrow}>▾</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#animals" onClick={() => handleScroll('animals')} className={styles.navLink}>
            Animals <span className={styles.arrow}>▾</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" onClick={() => handleScroll('about')} className={styles.navLink}>
            About Us <span className={styles.arrow}>▾</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" onClick={() => handleScroll('contact')} className={styles.navLink}>
            Contact <span className={styles.arrow}>▾</span>
          </a>
        </li>
      </ul>
      <div className={styles.buttonGroup}>
        <a href="#volunteer" onClick={() => handleScroll('volunteer')} className={styles.button}>Volunteer</a>
        <a href="#donation" onClick={() => handleScroll('donation')} className={styles.button}>Donate</a>
      </div>
    </nav>
  );
};

export default NavBar;
