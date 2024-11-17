import React, { useState } from 'react'
import kianu from '../assets/kianu.png'
import kianu2 from '../assets/kianu2.png'



const Slide = () => {

  const [slider, setSlider]=useState(50)
  const handleSliderChange = (e)=>{
    setSlider(e.target.value)
  }
  return (
    <div className='pb-10 md:py-20 mx-2 -mt-12 '>
      <h1 className=" mb-12 sm:mb-20 text-center text-3xl mt-4 font-bold tracking-wide font-raleway antialiased bg-gradient-to-r from-[#ffffff] to-[#f7f6dc] bg-clip-text text-transparent">Accuracy So High <br/> It's Like Our AI Went to Harvard!</h1>
      <div className='relative w-full overflow-hidden max-w-3xl m-auto rounded-xl'>
        <img src={kianu} style={{clipPath:`inset(0 ${100.2 - slider}% 0 0)`}} alt="image with background"/>
        <img src={kianu2} style={{clipPath:`inset(0 0 0 ${slider}%)`}} alt="image with no background" className='absolute top-0 left-0 w-full h-full'/>
        <input type="range" min={0} max={100} value={slider} onChange={handleSliderChange} className='custom-slider absolute top-1 left-1 w-full h-full cursor-pointer z-10' />
      </div>
    </div>
  )
}

export default Slide