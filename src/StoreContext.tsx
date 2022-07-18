import React, {Context, ReactNode} from 'react';
import {RootStoreType} from './redux/redux-store';

export const StoreContext = React.createContext<RootStoreType>({} as RootStoreType);

 const Provider:React.FC<{ store: RootStoreType, children: ReactNode }> = ({ store, children }) => {
  return (
      <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
  )
}

export default Provider

