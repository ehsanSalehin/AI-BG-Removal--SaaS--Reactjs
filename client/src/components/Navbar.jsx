import React from 'react'
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const {openSignIn} = useClerk()
  const {isSignedIn, user} = useUser()
  return (
    
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link to='/'><img src={logo} alt="logo" className='w-32 sm:w-32'/></Link>
        {
          isSignedIn?<div>
            <UserButton/>
          </div>
          :
        <button onClick={()=>openSignIn({})} className='bg-[#f9f8e6]  flex items-center gap-3 px-2 py-2 sm:px-8 sm:py-2 text-sm rounded-full text-gray-500'>
          Get Started <img src={arrow} alt="arrow" className='w-3 sm:w-4'/>
        </button>
        }

    </div>
  )
}

export default Navbar