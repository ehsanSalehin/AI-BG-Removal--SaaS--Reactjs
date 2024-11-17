import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div className='flex items-centr justify-center px-4 lg:px-44 py-3 flex-col '>
        <Link to='/' className='w-32 sm:w-32 flex justify-center  mx-auto' ><img src={logo} alt="logo" className='w-32 sm:w-32 flex justify-center items-center mx-auto'/></Link>
        <p className='mt-1 ml-2 text-gray-500 text-center'>Copyright @ehsansalehin.tech | All right reserved.</p>
    </div>
  )
}

export default Footer