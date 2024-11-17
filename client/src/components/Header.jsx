import React from 'react'
import upload from '../assets/upload.png'
import qq from '../assets/qq.jpeg'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gay-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        <div >
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#f9f8e6] leading-tight'>
                Making Backgrounds <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-[#65c4f0] to-[#bd8803] bg-clip-text text-transparent'>Disappear </span> Like<br className='max-md:hidden'/> Magic!
            </h1>
            <div>
                <input type="file" id="uploadImage" hidden />
                <label className='inline-flex items-center justify-center gap-1 px-4 py-2 rounded-full cursor-pointer 
             bg-gradient-to-r from-[#65c4f0] to-[#bd8803] 
             text-white font-semibold
             hover:scale-105 transition-all duration-500 shadow-md mt-7' 
                    htmlFor='uploadImage'>
                    <img width={20} src={upload} alt="upload" />
                    <p className='text-white'>Upload Your Image</p>
                </label>
            </div>
        </div>



        <div className='w-full max-w-md rounded-xl drop-shadow-xl'>
            <img src={qq} alt="header_image"/>
        </div>
    </div>
  )
}

export default Header