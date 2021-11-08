import React, { useEffect, useState } from 'react';
import { baseURL } from '../../../common/api/api';
import styles from './SearchBlock.module.css';

const SearchBlock = ({ searchValue, onChangeSearchQuery }) => {
  const [temperature, setTemperature] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    setIsFetching(true);
    const response = await fetch(`${baseURL}`).then((res) => res.json());
    setIsFetching(false);
    const rounding = Math.floor(response.main.temp);
    setTemperature(rounding);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className={styles.linkItems}>
          <span>
            <a href="!#">Home</a>
          </span>
          <span className={styles.linkItem}>
            <a href="!#">Blog</a>
          </span>
        </div>
        <div className={styles.searchContainer}>
          <h2>Stay always tuned with planting trends</h2>
          <span>
            Current temperature is:{' '}
            {!isFetching ? `${temperature} °C` : 'Loading...'}
          </span>
          <div>
            <input
              value={searchValue}
              onChange={onChangeSearchQuery}
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBlock;
