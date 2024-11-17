import React from 'react'
import upload2 from '../assets/upload2.png'
import download from '../assets/download.png'
import remove from '../assets/remove.png'

const How = () => {
  return (
    <div className='mx-4 py-20 xl:py-40'>
      <h1 className="text-center text-3xl mt-4 font-bold tracking-wide font-raleway antialiased bg-gradient-to-r from-[#ffffff] to-[#f7f6dc] bg-clip-text text-transparent">
      Your 3-Step Plan to <br />Background Freedom
      </h1>
      <div className=' flex items-star flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

          <div className='bg-[#f9f8e6] flex items-start gap-4 border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300'>
            <img src={upload2} alt="upload" className='mt-1.5' />
            <div>
                <p className='text-xl font-medium'>
                Upload Your Photo
                </p>
                <p className='text-sm text-neutral-500'>
                Even the Messy Ones!
                </p>
            </div>
          </div>


          <div className='bg-[#f9f8e6] flex items-start gap-4 border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300'>
            <img src={remove} alt="remove" className='w-5 mt-1.5'/>
            <div>
                <p className='text-xl font-medium'>
                Watch the Magic Happen 
                </p>
                <p className='text-sm text-neutral-500'>
                Popcorn Recommended!
                </p>
            </div>
          </div>


          <div className='bg-[#f9f8e6] flex items-start gap-4 border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300'>
            <img src={download} alt="download" className=' w-5 mt-1' />
            <div>
                <p className='text-xl font-medium'>
                Download Your Masterpiece
                </p>
                <p className='text-sm text-neutral-500'>
                Instant Bragging Rights Included!
                </p>
            </div>
          </div>

      </div>
    </div>
  )
}

export default How