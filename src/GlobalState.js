import React, { createContext, useContext, useState, useEffect } from 'react';

const initialGlobalState = {
  todos: [],
};

const GlobalState = createContext();
const GlobalStateSet = createContext();

export const useGlobalState = () => useContext(GlobalState);
export const useSetGlobalState = () => useContext(GlobalStateSet);

export const GlobalStateProvider = ({ children }) => {
  const [globals, setGlobals] = useState(initialGlobalState);

  useEffect(() => {
    GlobalState.set = setGlobals;
  }, []);

  return (
    <GlobalState.Provider value={globals}>
      <GlobalStateSet.Provider value={setGlobals}>
        {children}
      </GlobalStateSet.Provider>
    </GlobalState.Provider>
  );
};
