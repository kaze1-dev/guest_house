"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full px-4 sm:px-10 py-2 z-30 bg-black/20 backdrop-blur-md">
      <Link href="/">
        <Image 
          width={45} 
          height={45} 
          src="/GO-logo.webp" 
          alt="Guest House Logo" 
          priority 
        />
      </Link>
      
      <div className="flex sm:gap-24 gap-6 items-center">
        <nav className="flex gap-3 sm:gap-10 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`relative text-xs sm:text-base font-bold transition-all duration-200 block py-1 ${
                  isActive ? 'text-red-600' : 'text-white/70 hover:text-red-600'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bg-red-600 left-0 bottom-0 h-0.5 w-full rounded" />
                )}
              </Link>
            );
          })}
        </nav>
        <button className="px-2 py-1 sm:px-6 sm:py-3 text-xs text-white/90 font-bold bg-red-600 rounded-lg sm:uppercase tracking-tighter sm:text-sm hover:bg-red-800 transition">
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;