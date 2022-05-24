import { createContext } from 'react';

export const CountContext = createContext({
  count: 0,
  updateCount: (_?: number) => {},
});
