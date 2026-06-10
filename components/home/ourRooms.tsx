import Image from 'next/image';
import React from 'react'

const Rooms = () => {

  const roomData = [
    {
      title: 'Deluxe Room',
      image: '/bed11.jpeg',
      featuresLeft: ['King Size Bed', 'Smart TV', 'Free WiFi'],
      featuresRight: ['Air Conditioning', 'Attached Bath', 'Room Service']
    },
    {
      title: 'Executive Room',
      image: '/bed7.jpeg',
      featuresLeft: ['King Size Bed', 'Smart TV', 'Free WiFi'],
      featuresRight: ['Air Conditioning', 'Attached Bath', 'Room Service']
    },
    {
      title: 'Family Suite',
      image: '/bed9.jpeg',
      featuresLeft: ['King Size Bed', 'Smart TV', 'Free WiFi'],
      featuresRight: ['Air Conditioning', 'Attached Bath', 'Room Service']
    }
  ];

  return (
    <div className='py-12 px-6 max-w-6xl mx-auto w-full'>
      <div>
        <h3 className='sm:text-lg text-base text-white/80 flex justify-center items-center font-bold gap-3 mb-10 mt-4 uppercase tracking-wider'>
          <span className='border w-16 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
          Our Rooms
          <span className='border w-16 border-neutral-800 border-t-0 mt-0.5 rounded-full' />
        </h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {roomData.map((room, index) => (
          <div
            key={index}
            className='border border-neutral-800 bg-neutral-900/10 hover:border-neutral-700 transition-all duration-300 rounded-xl pb-6 overflow-hidden group'
          >
            <div className='relative w-full aspect-4/3 overflow-hidden rounded-t-xl'>
              <Image
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                width={500}
                height={375}
                src={room.image}
                alt={room.title}
              />
            </div>
            <h4 className='mt-5 mb-5 text-center font-bold text-xl font-rounded text-white group-hover:text-red-500 transition-colors'>
              {room.title}
            </h4>
            <div className='flex justify-around text-white/70 px-4 text-sm'>
              <div className='flex flex-col gap-3 font-semibold'>
                {room.featuresLeft.map((feature, idx) => (
                  <div key={idx} className='flex items-center gap-2'>
                    <span className='bg-red-600 rounded-full w-1.5 h-1.5 shrink-0' />
                    <p className='truncate'>{feature}</p>
                  </div>
                ))}
              </div>

              <div className='flex flex-col gap-3 font-semibold'>
                {room.featuresRight.map((feature, idx) => (
                  <div key={idx} className='flex items-center gap-2'>
                    <span className='bg-red-600 rounded-full w-1.5 h-1.5 shrink-0' />
                    <p className='truncate'>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Rooms