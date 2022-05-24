import * as React from 'react';

import { CounterController } from './CounterController';
import { DisplayCounter } from './DisplayCounter';

import { CountContextProvider } from '../state/CountContextProvider';
import { useCount } from '../state/useCount';

export const App = () => {
  return (
    <React.Fragment>
      <CountContextProvider>
        <CounterController />
        <DisplayCounter />
      </CountContextProvider>
    </React.Fragment>
  );
};
