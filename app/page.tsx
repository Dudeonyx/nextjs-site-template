'use client';
import { Signup } from '@/components/sign-up/Signup';
import Image from 'next/image';
import bg from '@/public/bg.jpg';
import { useState } from 'react';
import localFont from 'next/font/local';
import { Button } from '@/components/ui/button';
import testImage from '@/public/undraw_social-dashboard.svg';

const myFont = localFont({
  src: '../public/LucySaidOk.ttf',
});

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <main className="relative font-sans flex flex-col items-center  min-h-screen">
      <section className="relative w-full flex flex-col md:flex-row justify-between items-center md:items-stretch min-h-full md:min-h-[80vh] px-10 ">
        {/* <Image src={bg} alt="Background" fill className="absolute inset-0 -z-20 object-cover" /> */}
        {/* <div className="h-full w-full inset-0 absolute bg-[#1DB954]/30 backdrop-blur-xs -z-10" /> */}
        <div className="flex flex-col items-center md:items-start justify-center w-3/4 md:w-full min-h-[400px] gap-2 py-3 text-[#1DB954]">
          <h1 className="font-bold text-4xl lg:text-5xl text-center md:text-left text-[#1DB954]">
            Boost your Socials
          </h1>
          <h2 className="text-xl md:text-2xl  text-justify md:text-left">
            Verify your accounts, achieve the next level with a healthy boost to your likes
            followers, comments and views
          </h2>
          <h2
            className="text-lg text-left sm:text-left 
          "
          >
            Your one-stop digital shop
          </h2>
          <Button
            className="bg-[#1DB954] text-xl md:text-3xl p-6 md:p-8 hover:bg-[#0E3B24] mt-5"
            onClick={() => setShowSignup(!showSignup)}
          >
            Get Started
          </Button>
        </div>
        <div className="relative flex self-stretch justify-center  w-full -mr-10">
          <Image
            src={testImage}
            alt="bg stuff"
            className="h-full w-max object-contain"
            // height={1000}
            // width={1000}
          />
        </div>
      </section>
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
