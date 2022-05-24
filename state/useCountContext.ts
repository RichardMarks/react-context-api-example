import { useContext } from 'react';
import { CountContext } from './CountContext';

export const useCountContext = () => useContext(CountContext);
