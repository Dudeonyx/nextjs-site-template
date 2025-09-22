'use client';

import { ThemeProvider as NextThemeProvider, ThemeProviderProps, useTheme } from 'next-themes';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useEffect, useState } from 'react';
import { useClient } from '@/lib/clientUtils';
import dynamic from 'next/dynamic';

function TabsDemo() {
  const { theme, setTheme } = useTheme();
  // const isMounted = useClient();
  // if (!isMounted) return null;

  return (
    <div className="flex w-fit max-w-sm flex-col gap-6 fixed bottom-4 right-4 z-20">
      <Tabs defaultValue={theme}>
        <TabsList>
          <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
            Dark
          </TabsTrigger>
          <TabsTrigger value="light" onClick={() => setTheme('light')}>
            Light
          </TabsTrigger>
        </TabsList>
        {/* <TabsContent value="dark">.</TabsContent>
        <TabsContent value="light">.</TabsContent> */}
      </Tabs>
    </div>
  );
}

export const DynamicTabsDemo = dynamic(() => Promise.resolve(TabsDemo), { ssr: false });

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider {...props}>
      <DynamicTabsDemo />
      {children}
    </NextThemeProvider>
  );
}
