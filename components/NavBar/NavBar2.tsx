'use client';
import { useContext } from 'react';
import Link from 'next/link';
import logo from '@/public/veesocials logo.png';
import darkLogo from '@/public/veesocials logo dark.png';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../../public/LucySaidOk.ttf',
});

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
// import { DarkModeContext } from '@/components/DarkMode/DarkModeContext';
import { useTheme } from 'next-themes';
import { useClient } from '@/lib/clientUtils';

const components: { title: string; href: string; description: string; asBtn?: boolean }[] = [
  {
    title: 'SMS Verification',
    href: '/sms',
    description: 'Get a phone number to verify your account',
  },
  {
    title: 'Boost Accounts',
    href: '/boost',
    description: 'Increase your follow count with one of our booster packs',
  },
  {
    title: 'Account Verification',
    href: '/verification',
    description: 'Increase your likes significantly',
  },
  {
    title: 'Pre-built accounts',
    href: '/accounts',
    description: 'Why start from scratch? Get a premade account today',
  },
  // {
  //   title: 'Login',
  //   href: '/login',
  //   description: 'Get your account verified with our easy verification service',
  //   asBtn: true,
  // },
];
//
export default function NavigationMenuDemo() {
  // const [darkMode, setDarkMode] = React.useState(true);
  const { theme } = useTheme();
  const isMounted = useClient();
  // if (!isMounted) return null;
  return (
    <header className="dark:bg-brand-dark relative flex flex-row items-center justify-between w-full min-h-14 px-4">
      <Link
        href="/"
        className="relative h-9 min-w-24 flex-0 hover:scale-105 text-muted-foreground text-2xl font-bold transition-all duration-200"
      >
        {isMounted && (
          <Image
            className="h-full w-auto"
            src={theme === 'dark' ? darkLogo : logo}
            alt="VEE Socials"
            unoptimized
            height={100}
            width={250}
          />
        )}
        {/* <svg
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%', height: 'auto' }}
        >
          <circle cx="60" cy="60" r="54" fill="#1C1C1E" />
          <path d="M40 50 L60 70 L80 50" stroke="#1DB954" strokeWidth="6" fill="none" />
          <circle cx="60" cy="60" r="5" fill="#1DB954" />
        </svg> */}
      </Link>
      <NavigationMenu viewport={false} className=" hidden md:flex max-w-full">
        <NavigationMenuList>
          {components.map(({ title, href, asBtn }) => (
            <NavigationMenuItem key={title}>
              <NavigationMenuLink
                asChild
                className={
                  navigationMenuTriggerStyle() + ' dark:bg-brand-dark dark:text-brand-cloud'
                }
              >
                <Link href={href} className="flex flex-wrap wrap-normal !w-auto">
                  {title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        type="button"
        className="bg-brand-primary hover:bg-brand-mint hover:text-black text-white"
        size="lg"
      >
        <Link href="/login" className="flex flex-wrap wrap-normal !w-auto">
          Login
        </Link>
      </Button>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
