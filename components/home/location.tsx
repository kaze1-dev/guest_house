import React from 'react'
import { BiGlobe, BiPhoneCall } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

const Location = () => {
  return (
    <div className='px-6 pt-12 max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className=''>
          <h2 className='font-bold text-2xl text-white/80 mb-8'>Our Location</h2>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4953.691402696511!2d74.25628934670472!3d31.467227269401203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017114649355%3A0x1222acd75f2db9fb!2sGo%20Guest%20House%20Lahore!5e0!3m2!1sen!2s!4v1780925791741!5m2!1sen!2s" width="100%" height="222" loading="lazy" className='rounded-xl'></iframe>
          </div>
        </div>
        <div>
          <h2 className='font-bold text-2xl text-white/80 mb-8'>Contact Infomation</h2>
          <div className='border border-neutral-800 hover:border-neutral-700 transition rounded-xl px-4 py-4'>
            <div className='flex items-center gap-2 mb-4'>
              <HiLocationMarker className='text-red-600' size={24} />
              <p className='text-sm text-white/70'>
                J3, near Emporium Mall, J 3 Block Block J 3 Phase 2 Johar Town, Lahore, 54782, Pakistan
              </p>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <BiPhoneCall className='text-red-600' size={22} />
              <p className='text-sm text-white/70'>0307 6372319</p>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <BsWhatsapp className='text-green-600' size={22} />
              <p className='text-sm text-white/70'>0307 6372319</p>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <BiGlobe className='text-red-600' size={22} />
              <p className='text-sm text-white/70'>www.goguesthouselahore.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <HiMail className='text-red-600' size={22} />
              <p className='text-sm text-white/70'>goguesthouselahore@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location