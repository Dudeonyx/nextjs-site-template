'use client';

import {
  useState,
  createContext,
  useEffect,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '../NavBar/NavBar2';

export const DarkModeContext = createContext<boolean>(false);

export const SetDarkModeContext = createContext<Dispatch<SetStateAction<boolean>>>(() => {});

// const darkModeFromStorage =
//   (typeof window !== 'undefined' && localStorage?.darkMode === 'true') ||
//   (!localStorage?.darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches);

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  useLayoutEffect(() => {
    const darkModeFromStorage = localStorage.darkMode === 'true'; // ||
    // (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (darkMode !== darkModeFromStorage) {
      document.documentElement.classList.add('dark');
      setDarkMode(darkModeFromStorage);
    }
  }, []);
  useEffect(() => {
    localStorage.darkMode = darkMode.toString();
    document.documentElement.classList.remove(!darkMode ? 'dark' : '');
    darkMode || document.documentElement.classList.add('dark');
  }, [darkMode]);
  return (
    <DarkModeContext value={darkMode}>
      <SetDarkModeContext value={setDarkMode}>
        {/* <div className={darkMode ? 'dark' : ''}> */}
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
        {/* </div> */}
      </SetDarkModeContext>
    </DarkModeContext>
  );
}
