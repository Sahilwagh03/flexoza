import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  colors: {
    primary: string;
    primaryDark: string;
    background: string;
    text: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme: ThemeContextType = {
    colors: {
      primary: '#e63946',
      primaryDark: '#d32836',
      background: '#f8f5f1',
      text: '#1d3557',
    },
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};