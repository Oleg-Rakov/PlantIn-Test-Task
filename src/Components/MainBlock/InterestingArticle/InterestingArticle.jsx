import React from 'react';
import styles from './InterestingArticle.module.css';
import interest1 from '../../../assets/img/interesting-article/interest-1.png';
import interest2 from '../../../assets/img/interesting-article/interest-2.png';
import interest3 from '../../../assets/img/interesting-article/interest-3.png';

const InterestingArticle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.interestingInfo}>Interesting</div>
      <div className={styles.InterestingArticleWrapper}>
        <div className={styles.interestingArticleItem}>
          <img src={interest1} alt="" />
          <div className={styles.interestingArticleDate}></div>
          <h4>Watering mastery</h4>
          <p>
            Repotting a plant can seem like a difficult task because a lot of
            things can go wrong – you can damage...
          </p>
        </div>
        <div className={styles.interestingArticleItem}>
          <img src={interest2} alt="" />
          <div className={styles.interestingArticleDate}></div>
          <h4>Plant pot secrets</h4>
          <p>
            Repotting a plant can seem like a difficult task because a lot of
            things can go wrong – you can damage...
          </p>
        </div>
        <div className={styles.interestingArticleItem}>
          <img src={interest3} alt="" />
          <div className={styles.interestingArticleDate}></div>
          <h4>Professional Repot</h4>
          <p>
            Repotting a plant can seem like a difficult task because a lot of
            things can go wrong – you can damage...
          </p>
        </div>

        <div className={styles.interestingArticleItem}>
          <img src={interest1} alt="" />
          <div className={styles.interestingArticleDate}></div>
          <h4>Professional Repot</h4>
          <p>
            Repotting a plant can seem like a difficult task because a lot of
            things can go wrong – you can damage...
          </p>
        </div>
        <div className={styles.interestingArticleItem}>
          <img src={interest2} alt="" />
          <div className={styles.interestingArticleDate}></div>
          <h4>Professional Repot</h4>
          <p>
            Repotting a plant can seem like a difficult task because a lot of
            things can go wrong – you can damage...
          </p>
        </div>
        <div className={styles.interestingArticleItem}>
          <img src={interest3} alt="" />
          <div className={styles.interestingArticleDate}></div>
          <h4>Professional Repot</h4>
          <p>
            Repotting a plant can seem like a difficult task because a lot of
            things can go wrong – you can damage...
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterestingArticle;
