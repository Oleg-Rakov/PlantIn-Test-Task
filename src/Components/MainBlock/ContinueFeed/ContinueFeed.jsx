import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './ContinueFeed.module.css';
import interest1 from '../../../assets/img/interesting-article/interest-1.png';

const style = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
};

const ContinueFeed = ({ news, fetchMoreData, hasMore }) => {
  return (
    <div className={styles.container}>
      <div className={styles.continueWrapper}>
        {news.length ? (
          <InfiniteScroll
            style={style}
            dataLength={news.length}
            next={fetchMoreData}
            hasMore={hasMore}
          >
            {news.map((item, index) => (
              <div key={item.id} className={styles.continueItem}>
                <img src={interest1} alt="interesting" />
                <div className={styles.continueItemDate}>
                  <span>{item.publishing_date}</span>
                  <span className={styles.point}>&#183;</span>
                  <span>{item.publishing_time}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </InfiniteScroll>
        ) : null}
        {news.length === 0 ? (
          <div>No results were found for the query.</div>
        ) : null}
      </div>
    </div>
  );
};

export default ContinueFeed;
