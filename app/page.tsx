'use client';
import { Signup } from '@/components/sign-up/Signup';
import Image from 'next/image';
import bg from '@/public/bg.jpg';
import { useState } from 'react';
import localFont from 'next/font/local';
import { Button } from '@/components/ui/button';

const myFont = localFont({
  src: '../public/LucySaidOk.ttf',
});

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <main className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen -mt-14 p-8 pb-20 gap-16 sm:p-20">
      {/* <Image src="bg.jpg" alt="Background" fill className="absolute inset-0 -z-20 object-cover" /> */}
      {/* <div className="h-full w-full inset-0 absolute bg-gradient-to-b from-background to-transparent -z-10" /> */}
      <div className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <h2 className="text-lg text-center sm:text-left">Looking for reliable services?</h2>
        <h1 className="font-bold text-5xl">
          Welcome to{' '}
          <span style={{ color: '#1DB954' }} className={myFont.className + ' font-bold'}>
            Vee
          </span>{' '}
          socials
        </h1>
        <h2 className="text-lg text-center sm:text-left">Your one-stop digital shop</h2>
        {!showSignup ? (
          <Button onClick={() => setShowSignup(!showSignup)}>Enter</Button>
        ) : (
          <div className="w-full max-w-md">
            <Signup />
          </div>
        )}
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </main>
  );
}

// const getData = async () => {
//   let fin = [];
//   const r = await fetch('https://randommer.io/Phone');
//   console.log(r);
// };
// getData();
