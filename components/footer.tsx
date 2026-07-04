'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleTikTok = () => {
    window.open('https://www.tiktok.com/@goguesthouselahore', '_blank', 'noopener,noreferrer');
  };
  const handleInstagram = () => {
    window.open('https://www.instagram.com/goguesthouselahore?igsh=ZDRtODNlZGJvbDF3', '_blank', 'noopener,noreferrer');
  };
  const handleWhatsApp = () => {
    window.open('https://wa.me/923076372319', '_blank', 'noopener,noreferrer');
  };
  const handleFaceBook = () => {
    window.open('https://www.facebook.com/share/18zgvCKJ5T/', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className='w-full bg-neutral-950 border-t border-neutral-900/60 px-6 py-12 md:px-12 md:py-10 font-rounded'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0'>
          <Link href='#hero' className='group transition-transform duration-300 hover:opacity-95'>
            <div className='flex gap-3 text-neutral-200 items-center'>
              <Image 
                width={48} 
                height={48} 
                alt='Go Guest House Logo' 
                src='/GO-logo.webp' 
                className='object-contain transform group-hover:scale-105 transition-transform duration-300'
              />
              <div>
                <h3 className='flex flex-col font-bold leading-tight tracking-wide uppercase text-sm sm:text-base text-white'>
                  <span>Go Guest House</span>
                  <span className='text-red-600 tracking-widest text-xs font-semibold'>Lahore</span>
                </h3>
              </div>
            </div>
          </Link>
          <div className='flex flex-col items-center md:items-end gap-3.5'>
            <h4 className='text-xs font-bold uppercase tracking-[0.2em] text-neutral-500'>
              Follow us
            </h4>
            <div className='flex gap-3 text-neutral-400'>
              
              <button 
                onClick={handleInstagram} 
                className="p-2.5 rounded-xl bg-neutral-900/30 border border-neutral-900 hover:border-neutral-800 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 cursor-pointer active:scale-95"
                aria-label="Instagram"
              >
                <BsInstagram size={18} />
              </button>
              
              <button 
                onClick={handleTikTok} 
                className="p-2.5 rounded-xl bg-neutral-900/30 border border-neutral-900 hover:border-neutral-800 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 cursor-pointer active:scale-95"
                aria-label="TikTok"
              >
                <BsTiktok size={18} />
              </button>
              
              <button 
                onClick={handleWhatsApp} 
                className="p-2.5 rounded-xl bg-neutral-900/30 border border-neutral-900 hover:border-neutral-800 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 cursor-pointer active:scale-95"
                aria-label="WhatsApp"
              >
                <BsWhatsapp size={18} />
              </button>
              
              <button 
                onClick={handleFaceBook} 
                className="p-2.5 rounded-xl bg-neutral-900/30 border border-neutral-900 hover:border-neutral-800 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 cursor-pointer active:scale-95"
                aria-label="Facebook"
              >
                <BsFacebook size={18} />
              </button>

            </div>
          </div>

        </div>
        <hr className='border-neutral-900/60 my-8' />
        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 text-[13px] text-neutral-500 text-center md:text-left tracking-wide font-light'>
          <p>&copy; {currentYear} Go Guest House Lahore. All Rights Reserved.</p>
          <div className='flex gap-6 font-medium'>
            <Link href='/privacy-policy' className='hover:text-red-500 transition-colors duration-300'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-red-500 transition-colors duration-300'>
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer