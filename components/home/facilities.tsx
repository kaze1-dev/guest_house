import React from 'react'
import { HiClock, HiShieldCheck, HiTv, HiUsers, HiWifi } from 'react-icons/hi2';
import { LuCarFront } from 'react-icons/lu';
const Facilities = () => {
  const amenities = [
    { icon: <HiWifi size={32} />, labelTop: 'Free', labelBottom: 'High-Speed WiFi' },
    { icon: <HiTv size={32} />, labelTop: 'Smart TV', labelBottom: 'With Netflix' },
    { icon: <LuCarFront size={32} />, labelTop: 'Secure', labelBottom: 'Parking' },
    { icon: <HiUsers size={32} />, labelTop: 'Family', labelBottom: 'Friendly' },
    { icon: <HiClock size={32} />, labelTop: '24/7', labelBottom: 'Front Desk' },
    { icon: <HiShieldCheck size={32} />, labelTop: 'CCTV', labelBottom: 'Security' },
  ];

  return (
    <div className='py-12 max-w-6xl mx-auto  w-full'>

      <div>
        <h3 className='sm:text-lg text-base text-white/80 flex justify-center items-center font-bold gap-3 mb-10 mt-4 uppercase tracking-wider'>

          <span className='border w-12 md:w-24 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
          Amenities
          <span className='border w-12 md:w-24 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
        </h3>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 px-6 gap-4 md:gap-6'>
        {amenities.map((item, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center text-center border border-neutral-800 bg-neutral-900/10 hover:border-neutral-700 hover:scale-[1.03] transition-all duration-300 rounded-xl p-5 group cursor-default'
          >

            <div className='text-red-600 group-hover:text-red-500 transform group-hover:scale-110 transition-transform duration-300 mb-4'>
              {item.icon}
            </div>
            
            <p className='flex flex-col items-center text-sm font-semibold tracking-wide text-white/70 group-hover:text-white transition-colors duration-300 font-rounded leading-snug'>
              <span>{item.labelTop}</span>
              <span className='text-white/40 group-hover:text-white/60 transition-colors text-xs font-normal mt-0.5'>
                {item.labelBottom}
              </span>
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Facilities