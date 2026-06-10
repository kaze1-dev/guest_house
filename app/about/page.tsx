import React from 'react'
import { BiGlobe, BiPhoneCall } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

const AboutPage = () => {
  return (
    <div className='px-6 md:px-8 pt-24 md:pt-36 pb-20 max-w-6xl mx-auto bg-neutral-950 w-full text-white/90'>

      <div className='mb-16 md:mb-24'>
        <h1 className='text-white font-bold font-rounded text-3xl md:text-4xl mb-2'>About us</h1>
        <p className='text-sm text-white/50 mb-8 font-rounded italic'>
          Go Guest House Lahore | Best Guest House in Lahore
        </p>
        <div className='space-y-6 text-base md:text-lg leading-relaxed text-white/80'>
          <p className='font-rounded'>
            Go Guest House Lahore offers luxury rooms with a 100% family-friendly environment in the heart of Johar Town Lahore. We provide Deluxe, Executive, and Suite Rooms designed for families, business travelers, corporate guests, tourists, and company officials looking for comfortable and affordable accommodation in Lahore.
          </p>
          <p className='font-rounded'>
            At Go Guest House Lahore, we are committed to providing a neat, clean, secure, and peaceful environment for all our guests. Our guest house is ideally located in Johar Town Lahore, with easy access to Emporium Mall, Shaukat Khanum Hospital, Expo Center Lahore, University of Central Punjab (UCP), University of Lahore (UOL), Canal Road, and Thokar Niaz Baig.
          </p>
          <p className='font-rounded'>
            Whether you are visiting Lahore for business, medical treatment, shopping, education, tourism, or family trips, Go Guest House Lahore is dedicated to making your stay comfortable, safe, and memorable with quality accommodation and excellent hospitality.
          </p>
        </div>

        <p className='font-rounded text-red-500 font-semibold tracking-wide text-sm md:text-base mt-8 border-l-2 border-red-600 pl-4'>
          Choose Go Guest House Lahore – Your Trusted Guest House in Johar Town Lahore.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-28 items-start'>
        <div>
          <h2 className='text-white font-bold font-rounded text-3xl mb-1'>Facilities</h2>
          <p className='text-xs md:text-sm text-white/50 font-rounded mb-8'>
            Provided by Go Guest House Lahore
          </p>

          <div className='space-y-4'>
            {[
              "Free High-Speed WiFi",
              "Smart TV Entertainment",
              "Air-Conditioned Rooms",
              "Secure Parking",
              "Daily Housekeeping",
              "Family-Friendly Environment",
              "24/7 Guest Support"
            ].map((facility, index) => (
              <div key={index} className='flex items-center gap-4 text-white/80 font-rounded tracking-wide'>
                <span className='w-2 h-2 rounded-full bg-red-600 shrink-0'></span>
                <span>{facility}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-6'>
          <div className='border border-neutral-800 hover:border-neutral-700 transition rounded-xl p-6 bg-neutral-900/20'>
            <h3 className='text-white font-bold font-rounded text-xl mb-2'>Special Discount</h3>
            <p className='text-xs text-white/50 font-rounded mb-4'>
              Exclusive long-stay offers
            </p>
            <p className='text-white/70 text-sm md:text-base leading-relaxed font-rounded'>
              A Special Discount Package up to <span className='text-red-500 font-bold'>30%</span> For Our Valuable Guests On Monthly and Weekly Basis Room Rent. We are Offering 30% Discount On Monthly Basis Room Rent and 15% on Weekly Basis Room Rent.
            </p>
          </div>

          <div className='border border-neutral-800 border-l-red-600 border-l-4 hover:border-neutral-700 transition rounded-xl p-6 bg-neutral-900/20'>
            <h3 className='text-white font-bold font-rounded text-xl mb-3'>House Rules & Policy</h3>
            <p className='text-white/70 text-sm md:text-base leading-relaxed font-rounded'>
              <span className='font-bold text-red-500 uppercase tracking-wider text-xs block mb-1'>Important Note:</span>
              Illegal or immoral activity is strictly prohibited. Unmarried couples are not allowed. Thank you for your cooperation.
            </p>
          </div>
        </div>
      </div>
      <div className='border-t border-neutral-800 pt-16'>
        <h2 className='text-white font-bold font-rounded text-2xl md:text-3xl mb-6'>Plan Your Stay with Go Guest House Lahore</h2>

        <div className='space-y-8 text-white/80 text-sm md:text-base leading-relaxed max-w-4xl'>
          <div>
            <h3 className='text-white font-semibold text-lg mb-2'>A City Rich in History</h3>
            <p>No trip to Lahore is complete without visiting its world-famous landmarks. Explore the majestic <span className='text-red-500 font-bold'>Badshahi Mosque</span>, the historic Lahore Fort, and the breathtaking <span className='text-red-500 font-bold'>Shalimar Gardens</span>. Wander through the historic Walled City of Lahore, where traditional bazaars bring history to life.</p>
          </div>

          <div>
            <h3 className='text-white font-semibold text-lg mb-2'>Experience Lahore's Famous Food Culture</h3>
            <p>Lahore is widely known as the food capital of Pakistan. From traditional favorites such as Nihari, Paya, and Halwa Puri to modern restaurants, popular destinations like <span className='text-red-500 font-bold'>Fort Road Food Street</span> and <span className='text-red-500 font-bold'>MM Alam Road</span> provide unforgettable dining experiences.</p>
          </div>

          <div>
            <h3 className='text-white font-semibold text-lg mb-2'>Art, Culture, and Entertainment</h3>
            <p>Discover Lahore’s thriving arts scene by visiting the Lahore Museum, <span className='text-red-500 font-bold'>Alhamra Arts Council</span>, and the historic Pak <span className='text-red-500 font-bold'>Tea House</span>. Throughout the year, the city hosts literary festivals and cultural exhibitions celebrating its rich heritage.</p>
          </div>

          <div>
            <h3 className='text-white font-semibold text-lg mb-2'>Your Perfect Stay in Johar Town Lahore</h3>
            <p>Conveniently located in <span className='text-red-500 font-bold'>J3 Block, Phase 2 Johar Town, near Emporium Mall</span>, our guest house provides easy access to major attractions, business centers, universities, hospitals, and shopping destinations.</p>
          </div>
        </div>
        <div className='mt-12 max-w-xl'>
          <p className='font-semibold font-rounded text-white mb-4 tracking-wide text-lg'>
            Book Your Stay Today
          </p>

          <div className='border border-neutral-800 bg-neutral-900/40 rounded-xl p-6 space-y-4'>
            <div className='flex items-start gap-4'>
              <HiLocationMarker className='text-red-600 mt-1 shrink-0' size={22} />
              <p className='text-sm text-white/70 leading-normal'>
                J3, near Emporium Mall, J 3 Block, Phase 2 Johar Town, Lahore, 54782, Pakistan
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <BiPhoneCall className='text-red-600 shrink-0' size={20} />
              <p className='text-sm text-white/70'>0307 6372319</p>
            </div>
            <div className='flex items-center gap-4'>
              <BsWhatsapp className='text-green-500 shrink-0' size={20} />
              <p className='text-sm text-white/70'>0307 6372319</p>
            </div>
            <div className='flex items-center gap-4'>
              <BiGlobe className='text-red-600 shrink-0' size={20} />
              <p className='text-sm text-white/70 hover:text-red-500 transition cursor-pointer'>www.goguesthouselahore.com</p>
            </div>
            <div className='flex items-center gap-4'>
              <HiMail className='text-red-600 shrink-0' size={20} />
              <p className='text-sm text-white/70 hover:text-red-500 transition cursor-pointer'>goguesthouselahore@gmail.com</p>
            </div>
          </div>
        </div>

        <p className='font-rounded text-white/60 text-sm mt-12 max-w-3xl leading-relaxed'>
          Whether you are visiting Lahore for tourism, business, medical treatment, education, shopping, or a family vacation, Go Guest House Lahore offers the perfect combination of comfort, convenience, and affordability.
        </p>
      </div>

    </div>
  )
}

export default AboutPage