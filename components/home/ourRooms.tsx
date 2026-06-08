import Image from 'next/image';
import React from 'react'

const Rooms = () => {
  return (
    <div className=' px-6'>
      <div>
        <h3 className='text-lg text-white/80 flex justify-center items-center font-bold gap-2 mb-6 mt-10'>
          <span className='border w-40 border-red-700 border-t-0 mt-0.5 rounded-full font-rounded' />
          Our Rooms
          <span className='border w-40 border-red-700 border-t-0 mt-0.5 rounded-full' />
        </h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3'>
        <div className='border border-red-700 rounded-xl pb-6'>
          <Image className='w-full h-auto rounded-xl' width={300} height={300} src='/bed11.jpeg' alt='Deluxe Room' />
          <h4 className='my-2 text-center font-bold text-lg font-rounded text-white/80'>Deluxe Room</h4>
          <div className='flex justify-around text-white/70'>
            <div className='flex flex-col gap-2 font-semibold'>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>King Size Bed</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Smart TV</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Free WiFi</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 font-semibold'>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Air Conditioning</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Attached Bathrooms</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Room Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border border-red-700 rounded-xl pb-6'>
          <Image className='w-full h-auto rounded-xl' width={300} height={300} src='/bed7.jpeg' alt='Executive room' />
          <h4 className='my-2 text-center font-bold text-lg font-rounded text-white/80'>Deluxe Room</h4>
          <div className='flex justify-around text-white/70'>
            <div className='flex flex-col gap-2'>
              <div className='flex font-semibold items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>King Size Bed</p>
              </div>
              <div className='flex font-semibold items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Smart TV</p>
              </div>
              <div className='flex items-center gap-2 font-semibold'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Free WiFi</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 '>
              <div className='flex items-center gap-2 font-semibold'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Air Conditioning</p>
              </div>
              <div className='flex items-center gap-2 font-semibold'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Attached Bathrooms</p>
              </div>
              <div className='flex items-center gap-2 font-semibold'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Room Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border border-red-700 rounded-xl pb-6'>
          <Image className='w-full h-auto rounded-xl' width={300} height={300} src='/bed9.jpeg' alt='Family Room' />
          <h4 className='my-2 text-center font-bold text-lg font-rounded text-white/80'>Deluxe Room</h4>
          <div className='flex justify-around text-white/70'>
            <div className='flex flex-col gap-2 '>
              <div className='flex items-center gap-2 font-semibold'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>King Size Bed</p>
              </div>
              <div className='flex items-center gap-2 font-semibold'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Smart TV</p>
              </div>
              <div className='flex items-center gap-2 font-semibold'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Free WiFi</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 font-semibold'>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Air Conditioning</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Attached Bathrooms</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='bg-red-700 rounded-full w-2 h-2'></span>
                <p>Room Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms