import Image from 'next/image';
import React from 'react'

const Gallery = () => {
  return (
    <div className='px-6 pb-10'>
      <div>
        <h3 className='text-lg text-white/80 flex justify-center items-center font-bold gap-2 mb-6 mt-10'>
          <span className='border w-40 border-red-700 border-t-0 mt-0.5 rounded-full font-rounded' />
          Gallery
          <span className='border w-40 border-red-700 border-t-0 mt-0.5 rounded-full' />
        </h3>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='border border-red-700 rounded-2xl'>
          <Image className='w-full h-auto rounded-2xl brightness-90' alt='Go Guest House Lahore 1' src='/Go_Guest_House_Lahore_1.webp' width={200} height={200} />
        </div>
        <div className=' border border-red-700 rounded-2xl'>
          <Image className='w-full h-auto rounded-2xl brightness-90' alt='Go Guest House Lahore 1' src='/Go_Guest_House_Lahore_3.webp' width={200} height={200} />
        </div>
        <div className=' border border-red-700 rounded-2xl'>
          <Image className='w-full h-auto rounded-2xl brightness-90' alt='Go Guest House Lahore 1' src='/Go_Guest_House_Lahore_5.webp' width={200} height={200} />
        </div>
        <div className=' border border-red-700 rounded-2xl'>
          <Image className='w-full h-auto rounded-2xl brightness-90' alt='Go Guest House Lahore 1' src='/GO_Guest_House_Lahore_10.webp' width={200} height={200} />
        </div>
      </div>
      <div className='flex justify-center items-center mt-6'>
        <button className='px-4 py-2 rounded-xl border-red-700 border text-red-700 font-bold text-center cursor-pointer hover:bg-red-700/10 transition'>
          View More
        </button>
      </div>
    </div>
  )
}

export default Gallery