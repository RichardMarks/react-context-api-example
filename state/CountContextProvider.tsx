import * as React from 'react'

import {CountContext} from './CountContext';

import {useCount} from './useCount';

export const CountContextProvider = ({children}) => {
  const context = useCount()
  return (
    <CountContext.Provider value={context}>
      {children}
    </CountContext.Provider>
  )
}