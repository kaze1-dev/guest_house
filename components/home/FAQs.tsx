"use client";
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2';

const faqData = [
  { id: 1, q: "What is the exact location of Go Guest House Lahore?", a: "Go Guest House is centrally located in Lahore, offering easy access to major commercial hubs, shopping districts, and historical landmarks." },
  { id: 2, q: "What are the standard check-in and check-out times?", a: "Standard check-in is from 2:00 PM, and check-out is until 12:00 PM. Early check-in or late check-out can be requested based on availability." },
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
    <div className='py-16 px-6 max-w-4xl mx-auto w-full'>
      <h2 className='text-white font-bold sm:text-3xl text-2xl mb-10 text-center tracking-wide'>
        Frequently Asked Questions
      </h2>
      <div className='space-y-4 max-w-3xl mx-auto'>
        {faqData.map((faq) => {
          const isOpen = openId === faq.id;
          
          return (
            <div 
              key={faq.id}
              className={`bg-neutral-900/40 px-5 rounded-xl border transition-all duration-300 ${
                isOpen ? 'border-neutral-700 bg-neutral-900/70' : 'border-neutral-800/60'
              }`}
            >
              <div 
                onClick={() => toggleFAQ(faq.id)} 
                className='flex items-center justify-between py-5 cursor-pointer select-none gap-4 group'
                role="button"
                aria-expanded={isOpen}
              >
                <p className={`font-semibold text-sm md:text-base leading-snug transition-colors duration-200 ${
                  isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                }`}>
                  {faq.q}
                </p>
                <HiChevronDown 
                  size={18} 
                  className={`stroke-2 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-red-500' : 'text-white/40 group-hover:text-white/80'
                  }`} 
                />
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}>
                <div className="overflow-hidden">
                  <p className="pb-5 text-white/60 text-sm md:text-base leading-relaxed antialiased">
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