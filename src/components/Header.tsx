"use client";

import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Total Interior Eco</h1>
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem} onClick={toggleMenu}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem} onClick={toggleMenu}>
              <Link href="/About" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem} onClick={toggleMenu}>
              <Link href="/Contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* リボン */}
        <div className={styles.ribbonDropWrapper}>
          <div className={styles.ribbonContentWrapper}>
            <a href="" className={styles.ribbonLink}>
              Innovative Designs, Timeless Comfort.
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
