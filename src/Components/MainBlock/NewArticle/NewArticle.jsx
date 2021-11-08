import React from 'react';
import styles from './NewArticle.module.css';
import articleImg from '../../../assets/img/new-article/new-article-image.png';

const NewArticleBlog = () => {
  return (
    <article className={styles.container}>
      <div className={styles.rectangle}>New</div>
      <div className={styles.articleBlock}>
        <a href="!#">
          <img src={articleImg} alt="grow" />
        </a>
        <div className={styles.articleBlockInfo}>
          <span className={styles.articleBlockDate}>
            <a href="!#">Feb 23</a>
          </span>
          <span>
            <a href="!#">8 min read</a>
          </span>
          <h2>Tips {'&'} Tricks For Cutting</h2>
          <p>
            Pruning, like any other skill, requires knowing what you are doing
            to achieve success. The old idea that anyone with a chain saw or a
            pruning saw can be a landscape pruner is far from the truth. More
            trees are killed or ruined each year from improper pruning than by
            pests. Remember that pruning is the removal or...
          </p>
        </div>
      </div>
    </article>
  );
};

export default NewArticleBlog;
