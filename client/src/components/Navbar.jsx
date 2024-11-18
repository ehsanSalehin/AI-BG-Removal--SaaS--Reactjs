import React, { useContext, useEffect } from 'react'
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png'
import credits from '../assets/credit.png'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import {AppContext} from '../context/appContext';

const Navbar = () => {
  const {openSignIn} = useClerk()
  const {isSignedIn, user} = useUser()
  const {credit, loadCredits}=useContext(AppContext)
  const navigate = useNavigate()

  useEffect(()=>{
    //if the user signed in => we call loadCreditsData
    if(isSignedIn){
      loadCredits()
    }
  },[isSignedIn])



  return (
    
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link to='/'><img src={logo} alt="logo" className='w-32 sm:w-32'/></Link>
        {
          isSignedIn?
          <div className='flex items-center gap-2 '>
            <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-400 px-4 py-1.5  rounded-full hover:scale-105 transition-all duration-300'>
              <img src={credits} alt='credit' className='w-5'/>
              <p className='text-xs text-[#f9f8e6]'>Credits : {credit}</p>
            </button>
            <p className='text-blue-500 font-bold'>Hi, {user.fullName}</p>
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