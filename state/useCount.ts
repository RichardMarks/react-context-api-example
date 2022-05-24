import { useState, useCallback } from 'react';

export const INITIAL_COUNT = 0;

export const useCount = () => {
  const [count, setCount] = useState<number>(INITIAL_COUNT);

  const updateCount = useCallback((nextCount?: number) => {
    if (nextCount !== undefined) {
      console.log('set to', nextCount);
      setCount(nextCount);
      return;
    }
    console.log('reset to', INITIAL_COUNT);
    setCount(INITIAL_COUNT);
  }, []);

  return { count, updateCount };
};
