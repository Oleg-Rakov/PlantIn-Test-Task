import React from 'react';
import styles from './Promo.module.css';
import logo from '../../../assets/img/header/logo.svg';
import promoImg from '../../../assets/img/promo/background-adverb.png';

const Promo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo PlantIn" />
      <h2>Get unlimited access to exclusive articles</h2>
      <p>Get rid of limits and read everything you wish</p>
      <div className={styles.promoImage}>
        <img src={promoImg} alt="promo" />
      </div>
      <div className={styles.btnContainer}>
        <button>
          <a href="!#">Try For Free</a>
        </button>
      </div>
    </div>
  );
};

export default Promo;
