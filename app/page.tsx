'use client';
import { Signup } from '@/components/sign-up/Signup';
import Image from 'next/image';
import bg from '@/public/bg.jpg';
import { useState } from 'react';
import localFont from 'next/font/local';
import NavBar from '@/components/NavBar/NavBar2';
import { HeroSection } from '@/components/Sections/HeroSection';
import { OfferSection } from '@/components/Sections/OfferSection';
// import { da } from 'zod/locales';

const myFont = localFont({
  src: '../public/LucySaidOk.ttf',
});

export default function Home() {
  return (
    <main className="relative font-sans flex flex-col items-center  min-h-screen">
      <HeroSection></HeroSection>
      <OfferSection></OfferSection>
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
