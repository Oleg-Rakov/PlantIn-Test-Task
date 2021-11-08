import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <span>
          <a className={styles.item} href="!#">
            Terms of Service
          </a>
        </span>
        <span>
          <a className={styles.item} href="!#">
            Privacy Policy
          </a>
        </span>
        <span>
          <a className={styles.item} href="!c#">
            Subscription Policy
          </a>
        </span>
      </div>
      <div className={styles.copyRight}>
        <span>©Copyright © 2020 PlantIn. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
