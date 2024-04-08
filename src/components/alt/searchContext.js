
import React from 'react';

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
  
      
    </SearchContext.Provider>

    

    
  );
};
