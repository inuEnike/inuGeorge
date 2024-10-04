"use client"
import React from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = React.useState(false);
  function handleNav() {
    setNavOpen(!navOpen)
    console.info("Clicked")
  }

  let contextValue = {
    handleNav,
    navOpen
  }
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
