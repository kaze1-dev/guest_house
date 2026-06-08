import React from 'react'

const Description = () => {
  return (
    <div className='py-4 px-6 max-w-6xl mx-auto'>
      <h3 className='text-lg text-white/80 flex justify-center items-center font-bold gap-2 mb-6 mt-10'>
        <span className='border w-40 border-neutral-700 border-t-0 mt-0.5 rounded-full font-rounded' />
        About Us
        <span className='border w-40 border-neutral-700 border-t-0 mt-0.5 rounded-full' />
      </h3>
      <div className='font-rounded text-center'>
        <p className='text-center font text-white/80 tracking-widest'>
          <span className='text-red-600 font-bold'>Go Guest House</span> Lahore offers premium, exceptionally clean, and secure accommodation tailored for both families and corporate guests. Nestled in the vibrant heart of <span className='text-red-600 font-bold'>Johar Town</span>, our strategic location places you just minutes away from major landmarks, including <span className='text-red-600 font-bold'>Emporium Mall</span>, <span className='text-red-600 font-bold'>the Expo Center</span>, <span className='text-red-600 font-bold'>Shaukat Khanum Hospital</span>, and the <span className='text-red-600 font-bold'>University of Central Punjab (UCP)</span>. Our thoughtfully furnished rooms feature modern amenities such as high-speed Wi-Fi, Smart TVs with streaming services, pristine attached baths, and full air conditioning. Whether you are visiting Lahore for business, leisure, or medical transit, enjoy the perfect blend of <span className='text-red-600 font-bold'>luxury</span>, <span className='text-red-600 font-bold'>comfort</span>, and unmatched hospitality with our round-the-clock desk service and dedicated secure parking.
        </p>
        <button className='mt-6 border border-red-600 text-red-600 font-bold font-rounded px-6 py-3 rounded-xl hover:bg-red-600/10 transition-all cursor-pointer'>
          READ MORE
        </button>
      </div>
    </div>
  )
}

export default Description