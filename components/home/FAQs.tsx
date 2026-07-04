"use client";
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2';

const faqData = [
  { id: 1, q: "What is the exact location of Go Guest House Lahore?", a: "Go Guest House is centrally located in Lahore, offering easy access to major commercial hubs, shopping districts, and historical landmarks." },
  { id: 2, q: "What are the standard check-in and check-out times?", a: "Standard check-in is from 12:00 PM, and check-out is until 12:00 PM (next day). Early check-in or late check-out can be requested based on availability." },
  { id: 3, q: "Is secure parking available on-site?", a: "Yes, we provide complimentary, secure parking space for all our staying guests with 24/7 security monitoring." },
  { id: 4, q: "Are utilities, Wi-Fi, and breakfast included in the room rate?", a: "High-speed Wi-Fi is completely free. Depending on your booking package, a complimentary traditional or continental breakfast is also included." },
  { id: 5, q: "What is the cancellation policy for bookings?", a: "Free cancellation is available up to 24 hours before your scheduled arrival date. Cancellations made within 24 hours may incur a one-night charge." },
];

const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className='py-20 px-6 max-w-4xl mx-auto w-full bg-neutral-950 font-rounded'>
      
      {/* Premium Header Layout: Luxury fade line accents */}
      <div className='flex justify-center items-center gap-4 mb-12 mt-4'>
        <span className='h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-700' />
        <h2 className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400 text-center'>
          Frequently Asked Questions
        </h2>
        <span className='h-[1px] w-12 bg-gradient-to-l from-transparent to-neutral-700' />
      </div>

      {/* Accordion List Container */}
      <div className='space-y-4 max-w-3xl mx-auto'>
        {faqData.map((faq) => {
          const isOpen = openId === faq.id;
          
          return (
            <div 
              key={faq.id}
              className={`bg-neutral-900/20 backdrop-blur-sm px-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
                isOpen 
                  ? 'border-neutral-800 bg-neutral-900/40 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.8),0_0_25px_rgba(220,38,38,0.02)]' 
                  : 'border-neutral-900/80 hover:border-neutral-800'
              }`}
            >
              {/* Accordion Trigger Row */}
              <div 
                onClick={() => toggleFAQ(faq.id)} 
                className='flex items-center justify-between py-5 cursor-pointer select-none gap-4 group'
                role="button"
                aria-expanded={isOpen}
              >
                <p className={`font-medium text-sm md:text-base leading-snug transition-colors duration-300 ${
                  isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                }`}>
                  {faq.q}
                </p>
                <div className={`p-1.5 rounded-lg border transition-all duration-300 shrink-0 ${
                  isOpen 
                    ? 'bg-neutral-950 border-neutral-800 text-red-500 shadow-[0_0_10px_rgba(220,38,38,0.2)]' 
                    : 'bg-transparent border-transparent text-neutral-500 group-hover:text-neutral-300'
                }`}>
                  <HiChevronDown 
                    size={16} 
                    className={`stroke-2 transition-transform duration-500 ease-out ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </div>
              </div>

              {/* Dynamic Expandable Height Container */}
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}>
                <div className="overflow-hidden">
                  <p className="pb-6 pt-1 text-neutral-400 text-sm md:text-[15px] leading-relaxed font-light antialiased border-t border-neutral-900/40 mt-1">
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

export default FAQs;