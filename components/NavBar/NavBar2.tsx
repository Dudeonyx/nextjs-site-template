'use client';

import * as React from 'react';
import Link from 'next/link';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

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
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false} className=" hidden md:block w-full max-w-full">
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
