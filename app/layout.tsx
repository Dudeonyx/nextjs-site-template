import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar/NavBar2';
// import DarkModeProvider, { DarkModeContext } from '@/components/DarkMode/DarkModeContext';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VEE Socials - Buy Followers, Likes, and More',
  description:
    'Boost your social media presence with VEE Socials. Buy followers, likes, and get verified easily and securely.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="light" storageKey="app-theme">
          {/* <DarkModeProvider> */}
          <NavBar />
          {children}
          {/* </DarkModeProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
