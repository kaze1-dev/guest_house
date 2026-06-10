import React from 'react'
import { BiGlobe, BiPhoneCall } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

const Location = () => {

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.071347836612!2d74.25711207430126!3d31.467223449768206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017114649355%3A0x1222acd75f2db9fb!2sGo%20Guest%20House%20Lahore!5e0!3m2!1sen!2s!4v1781078868545!5m2!1sen!2s";

  return (
    <div className='py-16 px-6 max-w-6xl mx-auto w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-2xl text-white font-rounded tracking-wide mb-6'>
            Our Location
          </h2>
          <div className='flex-1 min-h-75 w-full border border-neutral-800 rounded-xl overflow-hidden shadow-xl bg-neutral-900/10 p-2'>
            <iframe 
              src={mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className='rounded-lg w-full h-full min-h-70'
            />
          </div>
        </div>
        

        <div className='flex flex-col'>

          <h2 className='font-bold text-2xl text-white font-rounded tracking-wide mb-6'>
            Contact Information
          </h2>
          
          <div className='flex-1 border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 transition-all duration-300 rounded-xl p-6 flex flex-col justify-center space-y-5 shadow-xl group'>
            
         
            <div className='flex items-start gap-4'>
              <HiLocationMarker className='text-red-600 mt-0.5 shrink-0' size={24} />
              <p className='text-sm text-white/70 font-rounded leading-relaxed'>
                J3 Block, near Emporium Mall, Phase 2 Johar Town, Lahore, 54782, Pakistan
              </p>
            </div>
            
            <div className='flex items-center gap-4'>
              <BiPhoneCall className='text-red-600 shrink-0' size={22} />
              <a href="tel:03076372319" className='text-sm text-white/70 hover:text-red-500 transition-colors font-rounded'>
                0307 6372319
              </a>
            </div>

            <div className='flex items-center gap-4'>
              <BsWhatsapp className='text-green-500 shrink-0' size={22} />
              <a href="https://wa.me/923076372319" target="_blank" rel="noopener noreferrer" className='text-sm text-white/70 hover:text-green-400 transition-colors font-rounded'>
                0307 6372319
              </a>
            </div>

            <div className='flex items-center gap-4'>
              <BiGlobe className='text-red-600 shrink-0' size={22} />
              <a href="https://www.goguesthouselahore.com" target="_blank" rel="noopener noreferrer" className='text-sm text-white/70 hover:text-red-500 transition-colors font-rounded'>
                www.goguesthouselahore.com
              </a>
            </div>

            <div className='flex items-center gap-4'>
              <HiMail className='text-red-600 shrink-0' size={22} />
              <a href="mailto:goguesthouselahore@gmail.com" className='text-sm text-white/70 hover:text-red-500 transition-colors font-rounded truncate'>
                goguesthouselahore@gmail.com
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Location