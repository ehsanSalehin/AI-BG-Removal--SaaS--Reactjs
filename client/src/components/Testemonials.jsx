import React from 'react'
import { testemonials } from '../assets/assets'
import quote from "../assets/quote.png"

const Testemonials = () => {
  return (
    <div>
        <h1 className="text-center text-3xl mt-4 font-bold tracking-wide font-raleway antialiased bg-gradient-to-r from-[#ffffff] to-[#f7f6dc] bg-clip-text text-transparent py-5">The 'OMG, It Actually Worked!' Corner</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:-gap-3 w-4xl mx-auto px-2 py-12 '>
            {testemonials.map((item,index)=>(
                <div className='bg-[#f9f8e6] rounded-xl p-6 drop-shadow-xl max-w-lg m-auto hover:scale-105 transition-all duration-300' key={index}>
                    <img src={quote} className='w-8'/>
                    <p className='text-3xl text-gray-500'>{item.text}</p>
                    <div className='flex items-center mt-5 gap-4'>
                        <img src={item.image} alt="photo" className='w-9 rounded-full '/>
                        <div>
                            <p className='text-xl'>{item.author}</p>
                            <p className='text-md text-gray-600'>{item.job}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testemonials