import React from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

const Location = () => {

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.071347836612!2d74.25711207430126!3d31.467223449768206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017114649355%3A0x1222acd75f2db9fb!2sGo%20Guest%20House%20Lahore!5e0!3m2!1sen!2s!4v1781078868545!5m2!1sen!2s";

  return (
    <div className='py-16 px-6 max-w-6xl mx-auto w-full bg-neutral-950'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch'>
        <div className='flex flex-col'>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-red-600 rounded-full" />
            <h2 className='font-bold text-2xl text-white font-rounded tracking-wide'>
              Our Location
            </h2>
          </div>
          <div className='flex-1 min-h-[320px] w-full border border-neutral-900 bg-neutral-900/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl p-2 group transition-all duration-300 hover:border-neutral-800'>
            <iframe 
              src={mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className='rounded-xl w-full h-full min-h-[300px] brightness-[0.85] contrast-[1.05] group-hover:brightness-100 transition-all duration-500'
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-red-600 rounded-full" />
            <h2 className='font-bold text-2xl text-white font-rounded tracking-wide'>
              Contact Information
            </h2>
          </div>
          <div className='flex-1 border border-neutral-900 bg-neutral-900/30 backdrop-blur-sm hover:border-neutral-800 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(220,38,38,0.03)] transition-all duration-300 rounded-2xl p-6 flex flex-col justify-center space-y-4 shadow-2xl relative overflow-hidden group'>
            <div className='flex items-start gap-4 p-3.5 rounded-xl hover:bg-neutral-900/40 transition-colors duration-300 group/item'>
              <div className='p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 text-red-600 group-hover/item:text-red-500 group-hover/item:drop-shadow-[0_0_6px_rgba(220,38,38,0.4)] transition-all duration-300 shrink-0'>
                <HiLocationMarker size={22} />
              </div>
              <div>
                <span className='text-[11px] font-bold tracking-widest text-neutral-500 uppercase block mb-0.5'>Address</span>
                <p className='text-sm text-neutral-300 font-rounded leading-relaxed font-light'>
                  J3 Block, near Emporium Mall, Phase 2 Johar Town, Lahore, 54782, Pakistan
                </p>
              </div>
            </div>
            <a 
              href="tel:03076372319" 
              className='flex items-center gap-4 p-3.5 rounded-xl hover:bg-neutral-900/40 transition-colors duration-300 group/item'
            >
              <div className='p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 text-red-600 group-hover/item:text-red-500 group-hover/item:drop-shadow-[0_0_6px_rgba(220,38,38,0.4)] transition-all duration-300 shrink-0'>
                <BiPhoneCall size={22} />
              </div>
              <div>
                <span className='text-[11px] font-bold tracking-widest text-neutral-500 uppercase block mb-0.5'>Call Us</span>
                <p className='text-sm text-neutral-300 group-hover/item:text-red-500 transition-colors font-rounded font-medium'>
                  0307 6372319
                </p>
              </div>
            </a>
            <a 
              href="https://wa.me/923076372319" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex items-center gap-4 p-3.5 rounded-xl hover:bg-neutral-900/40 transition-colors duration-300 group/item'
            >
              <div className='p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 text-green-500 group-hover/item:text-green-400 group-hover/item:drop-shadow-[0_0_6px_rgba(34,197,94,0.4)] transition-all duration-300 shrink-0'>
                <BsWhatsapp size={20} />
              </div>
              <div>
                <span className='text-[11px] font-bold tracking-widest text-neutral-500 uppercase block mb-0.5'>WhatsApp</span>
                <p className='text-sm text-neutral-300 group-hover/item:text-green-400 transition-colors font-rounded font-medium'>
                  0307 6372319
                </p>
              </div>
            </a>
            <a 
              href="mailto:goguesthouselahore@gmail.com" 
              className='flex items-center gap-4 p-3.5 rounded-xl hover:bg-neutral-900/40 transition-colors duration-300 group/item w-full min-w-0'
            >
              <div className='p-2.5 rounded-xl bg-neutral-950 border border-neutral-900 text-red-600 group-hover/item:text-red-500 group-hover/item:drop-shadow-[0_0_6px_rgba(220,38,38,0.4)] transition-all duration-300 shrink-0'>
                <HiMail size={22} />
              </div>
              <div className='min-w-0 flex-1'>
                <span className='text-[11px] font-bold tracking-widest text-neutral-500 uppercase block mb-0.5'>Email Us</span>
                <p className='text-sm text-neutral-300 group-hover/item:text-red-500 transition-colors font-rounded font-medium truncate'>
                  goguesthouselahore@gmail.com
                </p>
              </div>
            </a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Location