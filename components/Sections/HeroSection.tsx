import Image from 'next/image';
// import { Button } from '../ui/button';

import testImage from '@/public/undraw_social-dashboard.svg';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function HeroSection() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <section className="dark:bg-brand-dark relative w-full flex flex-col md:flex-row justify-between items-center md:items-stretch min-h-[640px] md:min-h-[80vh] px-6 md:px-12 pt-20 sm:pt-0">
      {/* <Image src={bg} alt="Background" fill className="absolute inset-0 -z-20 object-cover" /> */}
      {/* <div className="h-full w-full inset-0 absolute bg-[#1DB954]/30 backdrop-blur-xs -z-10" /> */}
      <div className="dark:text-brand-cloud text-brand-primary flex flex-col items-center md:items-start justify-center w-full md:w-full sm:min-h-[320px] md:min-h-[400px] gap-2 py-4">
        <h1 className="font-bold text-4xl lg:text-5xl text-center md:text-left ">
          Boost your Socials
        </h1>
        <h2 className="text-xl md:text-2xl  text-center md:text-left">
          Verify your accounts, achieve the next level with a healthy boost to your likes followers,
          comments and views
        </h2>
        <h2
          className="text-lg text-left sm:text-left 
            "
        >
          Your one-stop digital shop
        </h2>
        <Button
          className="bg-brand-primary text-xl md:text-3xl p-6 md:p-8 hover:bg-brand-mint hover:text-black text-white mt-6"
          onClick={() => setShowSignup(!showSignup)}
        >
          Get Started
        </Button>
      </div>
      <div className="relative flex self-center justify-center max-w-[85%] m:px-0 w-full md:-mr-8">
        <Image
          src={testImage}
          alt="bg stuff"
          className="h-full w-max object-contain" // height={1000}
          // width={1000}
        />
      </div>
    </section>
  );
}
