'use client';

import * as React from 'react';
import Link from 'next/link';
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Foreign Numbers',
    href: '/sims',
    description: 'Purchase foreign sims for business use',
  },
  {
    title: 'Boost Follower Count',
    href: '/followers',
    description: 'Increase your follow count with one of our booster packs',
  },
  {
    title: 'Boost likes and reactions',
    href: '/likes',
    description: 'Increase your likes significantly',
  },
  {
    title: 'Get Verified',
    href: '/verification',
    description: 'Get your account verified with our easy verification service',
  },
  {
    title: 'Login',
    href: '/login',
    description: 'Get your account verified with our easy verification service',
  },
];

export function NavigationMenuDemo() {
  return (
    <div className="relative flex flex-row items-center justify-between w-full min-h-16 mx-4">
      <Link
        href="/"
        className="relative h-9 w-32 hover:scale-105 text-muted-foreground text-2xl font-bold transition-all duration-200"
      >
        <Image
          className="h-full w-auto"
          src="veesocials logo.png"
          alt="VEE Socials"
          height={10}
          width={25}
        />
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
      <NavigationMenu viewport={false} className=" hidden md:block w-full max-w-full m-2">
        <NavigationMenuList>
          {components.map(({ title, href }) => (
            <NavigationMenuItem key={title}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={href}>{title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
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
