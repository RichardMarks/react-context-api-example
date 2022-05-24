import * as React from 'react';
import { useCountContext } from '../state/useCountContext';

export const DisplayCounter = () => {
  const { count } = useCountContext();

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
};
