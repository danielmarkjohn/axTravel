// src/hooks/useInfiniteScroll.ts
import { useState, useEffect, useCallback } from 'react';

export const useInfiniteScroll = (
  callback: () => void,
  hasMore: boolean
) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    if (!hasMore || isFetching) return;

    // Check if we're near the bottom of the page
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const scrollThreshold = document.documentElement.offsetHeight - 800; // Load more when 800px from bottom

    if (scrollPosition > scrollThreshold) {
      setIsFetching(true);
    }
  }, [hasMore, isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;

    callback();
    setIsFetching(false);
  }, [isFetching, callback]);

  return { isFetching };
};
