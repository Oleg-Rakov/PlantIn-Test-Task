import React from 'react';
import styles from './Preview.module.css';
import skeletonPreviewImg from '../../../assets/img/preview-skeleton.png';

const Preview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={skeletonPreviewImg} alt="preloader" />
      </div>
      <div className={styles.item}>
        <img src={skeletonPreviewImg} alt="preloader" />
      </div>
      <div className={styles.item}>
        <img src={skeletonPreviewImg} alt="preloader" />
      </div>
    </div>
  );
};

export default Preview;
