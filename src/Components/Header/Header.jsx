import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/header/logo.svg';
import searchInput from '../../assets/img/header/search-input-small.svg';
import avatarLogo from '../../assets/img/header/ava-icon.png';

const navLinks = [
  'Discover',
  'My Plants',
  'Diseases',
  'Blog',
  'FAQ',
  'Contact Us',
];

const Header = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <a href="!#">
          <img src={logo} alt="Logo PlantIn" />
        </a>
      </div>
      <div
        className={
          hamburgerActive
            ? `${styles.navItems} ${styles.navItemsActive}`
            : `${styles.navItems}`
        }
      >
        {navLinks.map((item, index) => {
          return (
            <a
              key={index}
              onClick={() => setHamburgerActive((prev) => !prev)}
              href="!#"
            >
              {item}
            </a>
          );
        })}
      </div>
      <div className={styles.searchIcon}>
        <a href="!#">
          <img src={searchInput} alt="Input for search" />
        </a>
      </div>
      <div className={styles.avatarLogo}>
        <a href="!#">
          <img src={avatarLogo} alt="Avatar logo" />
        </a>
      </div>
      <div
        className={styles.menuToggle}
        onClick={() => setHamburgerActive((prev) => !prev)}
      >
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
