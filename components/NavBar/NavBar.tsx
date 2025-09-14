import Link from 'next/link';
import { NavigationMenuDemo } from './NavBar2';

export default function NavBar({ sample }: { sample?: boolean }) {
  return sample ? (
    <nav className="w-full absolute flex items-center justify-between py-4 px-8 bg-primary text-white">
      <div className="text-lg font-bold">MyApp</div>
      <div className="space-x-4 hidden sm:flex">
        {/* <Link href="#" className="hover:underline"> */}
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="signup" className="hover:underline">
          Sign Up
        </Link>
        <Link href="signup2" className="hover:underline">
          Sign Up 2
        </Link>
        <Link href="login" className="hover:underline">
          Login
        </Link>
        <Link href="#" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  ) : (
    <NavigationMenuDemo />
  );
}
