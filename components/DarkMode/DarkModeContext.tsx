'use client';

import { useState, createContext, useEffect, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '../NavBar/NavBar2';

export const DarkModeContext = createContext<boolean>(false);
export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  useLayoutEffect(() => {
    const darkModeFromStorage =
      typeof window !== 'undefined' ? localStorage.getItem('darkMode') === 'true' : false;
    if (darkMode !== darkModeFromStorage) {
      setDarkMode(darkModeFromStorage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  return (
    <DarkModeContext value={darkMode}>
      <div className={darkMode ? 'dark' : ''}>
        <Button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          // variant="ghost"
          // size={'icon'}
          className="fixed bottom-4 right-4 z-50 opacity-50 hover:opacity-100 !text-wrap text-xs rounded-full size-11"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
        {children}
      </div>
    </DarkModeContext>
  );
}
