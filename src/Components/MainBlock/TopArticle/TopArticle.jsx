import React from 'react';
import styles from './TopArticle.module.css';
import img1 from '../../../assets/img/top-article/top-of-the-day-1.png';
import img2 from '../../../assets/img/top-article/top-of-the-day-2.png';

const TopArticle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topInfo}>
        <span>TOP OF THE DAY</span>
      </div>
      <div className={styles.topArticleWrapper}>
        <div className={styles.topArticleItem}>
          <img src={img1} alt="" />
          <span className={styles.topArticleDate}>Feb 23</span>
          <span>8 min read</span>
          <h3>Professional Repot</h3>
          <p>
            Repotting a plant can seem like a difficult task because a lot of
            things can go wrong – you can damage...
          </p>
        </div>
        <div className={styles.topArticleItem}>
          <img src={img2} alt="" />
          <span className={styles.topArticleDate}>Feb 23</span>
          <span>8 min read</span>
          <h3>Professional Repot</h3>
          <p>
            Repotting a plant can seem like a difficult task because a lot of
            things can go wrong – you can damage...
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopArticle;
