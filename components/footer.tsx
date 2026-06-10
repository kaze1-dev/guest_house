import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (

    <div className='w-full bg-neutral-900/40 px-5 py-8 md:px-10 md:py-4'>

      <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0'>

        <div className='flex gap-2 text-white/80 items-center'>
          <Image width={50} height={50} alt='Go Guest House Logo' src='/GO-logo.webp' />
          <div>
            <h3 className='flex flex-col font-bold leading-tight'>
              <span>Go Guest House</span>
              <span className='text-red-600'>Lahore</span>
            </h3>
          </div>
        </div>

        <div className='flex flex-col items-center md:items-start gap-3'>
          <div className=''>
            <h3 className='text-lg font-bold text-white/80 text-center'>Follow us</h3>
          </div>
          <div className='flex gap-6 text-white/80'>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
              <BsInstagram size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
              <BsTiktok size={20} />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
              <BsWhatsapp size={20} />
            </a>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
              <BsFacebook size={20} />
            </a>
          </div>
        </div>

      </div>
      <hr className='border-white/10 my-6' />
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 text-xs text-white/60 text-center md:text-left'>
        <p>&copy; {currentYear} Go Guest House Lahore. All Rights Reserved.</p>
        <div className='flex gap-6'>
          <Link href='/privacy-policy' className='hover:text-red-600 transition'>Privacy Policy</Link>
          <Link href='/terms' className='hover:text-red-600 transition'>Terms of Service</Link>
        </div>
      </div>

    </div>
  )
}

export default Footer