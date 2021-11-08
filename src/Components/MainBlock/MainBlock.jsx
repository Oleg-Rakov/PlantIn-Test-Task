import React, { useCallback, useEffect, useState } from 'react';
import InterestingArticle from './InterestingArticle/InterestingArticle';
import NewArticle from './NewArticle/NewArticle';
import SearchBlock from './SearchBlock/SearchBlock';
import TopArticle from './TopArticle/TopArticle';
import styles from './MainBlock.module.css';
import Promo from './Promo/Promo';
import ContinueFeed from './ContinueFeed/ContinueFeed';
import Preview from './Preview/Preview';
import json from '../../db.json';

const allNewsMock = json.interesting.sort((a, b) => a.id - b.id);

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const ITEMS_PER_PAGE = 6;

const MainBlock = () => {
  const [searchValue, setSearchValue] = useState('');
  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 600);

  const currentPage = news.length / ITEMS_PER_PAGE;

  const fetchMoreData = useCallback(() => {
    if (isFetching) return;

    setIsFetching(true);
    const nextPage = getNewsForPage(currentPage);
    setTimeout(() => {
      setNews((prevNews) => prevNews.concat(nextPage));
      setIsFetching(false);
    }, 1500);
  }, [isFetching]);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const hasMore = news.length < allNewsMock.length;

  const filterNews = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  };

  const showSearchResults = Boolean(searchValue);
  const filteredNews = filterNewsBySearchValue(news, debouncedSearchValue);
  return (
    <div className={styles.wrapper}>
      <SearchBlock
        searchValue={searchValue}
        onChangeSearchQuery={(e) => filterNews(e)}
      />
      {!showSearchResults && (
        <>
          <NewArticle />
          <TopArticle />
          <InterestingArticle />
        </>
      )}
      <Promo />
      <ContinueFeed
        news={filteredNews}
        fetchMoreData={fetchMoreData}
        hasMore={hasMore}
      />
      {isFetching && <Preview />}
    </div>
  );
};

function filterNewsBySearchValue(feedNews, searchQuery) {
  return searchQuery
    ? feedNews.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : feedNews;
}

function getNewsForPage(currentPage) {
  return allNewsMock.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );
}

export default MainBlock;
