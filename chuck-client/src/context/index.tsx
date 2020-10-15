
import React, { createContext, useReducer } from 'react';

import { State } from '../types'
import storeReducer from '../data/reducers'

const initialState: State = {
  categories: [],
  joke: {
    iconUrl: '',
    value: '',
    id: '',
    url: ''
  }
}

export const StoreContext = createContext<any>(initialState);

const Store = ({ children }: any ) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
};

export default Store;
