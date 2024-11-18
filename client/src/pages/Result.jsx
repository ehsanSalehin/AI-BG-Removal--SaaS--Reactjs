import React, { useContext } from 'react'
import kianu from "../assets/kianu.png"
import kianu2 from "../assets/kianu2.png"
import { AppContext } from '../context/appContext'

const Result = () => {

    const {resultImage, image} = useContext(AppContext)


  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75 vh] mb-[36vh]'>
      <div className='bg-[#f9f8e6] rounded-lg px-8 py-6 drop-shadow-sm'>
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          <div>
            <p className='font-semibold text-gray-500 mb-2'>
            The Messy Original
            </p>
            <img className="rounded-md border" src={image? URL.createObjectURL(image):kianu} alt="photo with background"/>
          </div>

          <div className='flex flex-col'>
            <p className='font-semibold text-gray-500 mb-2'>Poof! Background Begone!</p>
            <div className='rounded-md border border-gray-400 h-full relative overflow-hidden'>
            <img src={resultImage?resultImage:kianu2} alt="photo with no background" />
            {
              !resultImage && image &&<div className='absolute right-1/2 bottton-1/2 transform translate-x-1/2 translate-y-1/2'>
              <div className='border-4 border-blue-600 rounded-full h-12 w-12 border-t-transparent animate-spin mt-14  lg:mt-24'>
              </div>
            </div>
            }
            </div>
          </div>
        </div>

        {resultImage||<div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
          <button className='px-8 py-2.5 text-gray-600 text-sm border border-pink-400 rounded-full hover:scale-105 transition-all duration-300'>Upload another image</button>
          <a href={resultImage} download className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-[#65c4f0] to-[#bd8803] rounded-full hover:scale-105 transition-all duration-300' href=''>Download image</a>
        </div>}


      </div>
    </div>
  )
}

export default Result