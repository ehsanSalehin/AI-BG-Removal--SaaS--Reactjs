import React, { useContext } from 'react'
import upload from "../assets/upload.png"
import { AppContext } from '../context/appContext'
const Bottom = () => {


  const {removeBg} = useContext(AppContext)
  return (
    <div className='pb-16 text-center'>
        <h1 className='className="text-center text-3xl mt-4 font-bold tracking-wide font-raleway antialiased bg-gradient-to-r from-[#ffffff] to-[#f7f6dc] bg-clip-text text-transparent py-6 md:py-16'>
        Background? What Background?
        </h1>

        <div className='text-center mb-24 '>
                <input onChange={e=>removeBg(e.target.files[0])} accept='image/*' type="file" id="uploadImage2" hidden />
                <label className='inline-flex items-center justify-center gap-1 px-4 py-2 rounded-full cursor-pointer 
             bg-gradient-to-r from-[#65c4f0] to-[#bd8803] 
             text-white font-semibold
             hover:scale-105 transition-all duration-500 shadow-md mt-7' 
                    htmlFor='uploadImage2'>
                    <img width={20} src={upload} alt="upload" />
                    <p className='text-white'>Upload Your Image</p>
                </label>
            </div>

    </div>
  )
}

export default Bottom