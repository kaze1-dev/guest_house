"use client";
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2';

const faqData = [
  { id: 1, q: "What is the exact location of Go Guest House Lahore?", a: "Go Guest House is centrally located in Lahore, offering easy access to major commercial hubs, shopping districts, and historical landmarks." },
  { id: 2, q: "What are the standard check-in and check-out times?", a: "Standard check-in is from 2:00 PM, and check-out is until 12:00 PM. Early check-in or late check-out can be requested based on availability." },
  { id: 3, q: "Is secure parking available on-site?", a: "Yes, we provide complimentary, secure parking space for all our staying guests with 24/7 security monitoring." },
  { id: 4, q: "Are utilities, Wi-Fi, and breakfast included in the room rate?", a: "High-speed Wi-Fi is completely free. Depending on your booking package, a complimentary traditional or continental breakfast is also included." },
  { id: 5, q: "What is the cancellation policy for bookings?", a: "Free cancellation is available up to 24 hours before your scheduled arrival date. Cancellations made within 24 hours may incur a one-night charge." },
  { id: 6, q: "Do you offer airport shuttle services?", a: "Yes, we can arrange reliable airport pick-and-drop services upon request for an additional nominal fee." }
];
const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className='px-6 pt-12 max-w-6xl mx-auto'>
      <h2 className='text-white/80 font-bold text-2xl mb-8 text-center md:text-left'>
        Frequently Asked Questions
      </h2>
  
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {faqData.map((faq) => {
          const isOpen = openId === faq.id;
          
          return (
            <div 
              key={faq.id}
              className='bg-neutral-900/60 px-5 rounded-xl border border-neutral-800/40 h-fit'
            >
              <div 
                onClick={() => toggleFAQ(faq.id)} 
                className='flex items-center justify-between py-4 cursor-pointer select-none gap-4'
              >
                <p className='font-semibold text-white/80 text-sm md:text-base leading-snug'>
                  {faq.q}
                </p>
                <HiChevronDown 
                  size={20} 
                  className={`stroke-2 text-white/60 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`} 
                />
              </div>

              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}>
                <div className="overflow-hidden">
                  <p className="pb-5 text-white/60 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQs