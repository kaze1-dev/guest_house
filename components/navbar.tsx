"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
  ]
  return (
    <div className="flex justify-between items-center w-full fixed px-4 sm:px-10 py-2 z-30 bg-black/20 backdrop-blur-md">
      <Link href='/'>
        <Image className="cursor-pointer" width={45} height={45} src='/GO-logo.webp' alt="Guest House Logo" loading='lazy' />
      </Link>
      <div className="flex sm:gap-26 gap-6 items-center">
        <nav className="flex gap-3 sm:gap-10 font-bold text-white/70 items-center">
          {
            navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link key={link.href} href={link.href}>
                  <div className={`relative cursor-pointer text-xs sm:text-base font-bold transition-all duration-200 block ${isActive ? 'text-red-600' : 'text-white/70 hover:text-red-600'}`}>
                    {link.name}
                    {isActive && (
                      <span className='absolute bg-red-600 left-0 -bottom-1 h-0.5 w-full rounded'></span>
                    )}
                  </div>
                </Link>
              )
            })
          }
        </nav>
        <button className="px-2 py-1 sm:px-6 sm:py-3 text-xs text-white/90 font-bold bg-red-600 rounded-lg sm:uppercase  tracking-tighest sm:text-sm hover:bg-red-800 cursor-pointer transition">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Navbar