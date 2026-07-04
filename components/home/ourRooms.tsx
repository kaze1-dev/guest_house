import Image from 'next/image';
import React from 'react';

const Rooms = () => {
  const roomData = [
    {
      title: 'Deluxe Room',
      image: '/bed9.jpeg',
      featuresLeft: ['King Size Bed', 'Smart TV', 'Free WiFi'],
      featuresRight: ['Air Conditioning', 'Attached Bath', 'Room Service']
    },
    {
      title: 'Executive Room',
      image: '/go-3.jpg',
      featuresLeft: ['King Size Bed', 'Smart TV', 'Free WiFi'],
      featuresRight: ['Air Conditioning', 'Attached Bath', 'Room Service']
    },
    {
      title: 'Family Suite',
      image: '/bed11.jpeg',
      featuresLeft: ['King Size Bed', 'Smart TV', 'Free WiFi'],
      featuresRight: ['Air Conditioning', 'Attached Bath', 'Room Service']
    },
  ];

  return (
    <div className='py-16 px-6 max-w-6xl mx-auto w-full'>
      <div className='flex justify-center items-center gap-4 mb-12 mt-4'>
        <span className='h-[1px] w-12 bg-gradient-to-r from-transparent to-neutral-700' />
        <h3 className='text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400'>
          Our Rooms
        </h3>
        <span className='h-[1px] w-12 bg-gradient-to-l from-transparent to-neutral-700' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {roomData.map((room, index) => (
          <div
            key={index}
            className='border border-neutral-900 bg-neutral-900/30 backdrop-blur-sm hover:border-neutral-800 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_30px_rgba(220,38,38,0.03)] transition-all duration-300 rounded-2xl pb-6 overflow-hidden group'
          >
            <div className='relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl'>
              <Image
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                width={500}
                height={375}
                src={room.image}
                alt={room.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent pointer-events-none" />
            </div>
            <h4 className='mt-6 mb-5 text-center font-bold text-xl font-rounded text-white group-hover:text-red-500 transition-colors duration-300 tracking-wide'>
              {room.title}
            </h4>
            <div className='grid grid-cols-2 gap-x-6 gap-y-3.5 px-6 text-sm text-neutral-400 font-light tracking-wide'>
              <div className='flex flex-col gap-3.5'>
                {room.featuresLeft.map((feature, idx) => (
                  <div key={idx} className='flex items-center gap-2.5'>
                    <span className='rounded-full w-1.5 h-1.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] shrink-0' />
                    <p className='truncate text-neutral-300 font-medium text-[13px] sm:text-sm'>{feature}</p>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-3.5'>
                {room.featuresRight.map((feature, idx) => (
                  <div key={idx} className='flex items-center gap-2.5'>
                    <span className='rounded-full w-1.5 h-1.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] shrink-0' />
                    <p className='truncate text-neutral-300 font-medium text-[13px] sm:text-sm'>{feature}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;