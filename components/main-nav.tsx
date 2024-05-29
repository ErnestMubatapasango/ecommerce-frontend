"use client"
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import Container from '@/components/ui/container';

// interface MainNavProps {
//     data: Category[]
// }
const MainNav = (props: {toggle: any}) => {

    const pathname = usePathname();
    const routes = [
        {
            href: '/',
            label: 'Home',
            active: pathname === '/'
        },
        {
            href: '/store',
            label: 'Store',
            active: pathname === '/store'
        },
        {
            href: '/about',
            label: 'About',
            active: pathname === '/about'
        }, 
        {
            href: '/faq',
            label: 'FAQ',
            active: pathname === '/faq'
        },      
        {
            href: '/contact',
            label: 'Contact',
            active: pathname === '/contact'
        },
    ]
  return (
    <Container>
    <nav className="mx-6 flex flex-col smm:flex-row justify-center items-center gap-4">
        {routes.map((route) => (
            <Link
                href={route.href}
                key={route.href}
                onClick={(e) => props.toggle()}
                className={cn("text-md font-medium transition-colors hover:text-black",
                    route.active ? "text-black font-bold": "text-neutral-600"
                )}
            >
                {route.label}
            </Link>
        ))}
    </nav>
    </Container>
  )
}

export default MainNav