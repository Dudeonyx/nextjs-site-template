import { Signup } from '@/components/sign-up/Signup';
import Image from 'next/image';
import bg from '@/public/bg.jpg';

export default function Home() {
  return (
    <div className="relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="  flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
          className="absolute inset-0 -z-10"
        />
        <h2 className="text-lg text-center sm:text-left">Looking for reliable services?</h2>
        <h1 className="font-bold text-5xl">Welcome to Vicki&apos;s Digital Emporium!</h1>
        <h2 className="text-lg text-center sm:text-left">Your one-stop digital shop</h2>
        {/* <Signup />/ */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
