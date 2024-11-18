import React, { useContext } from 'react'
import money from "../assets/money.png"
import { Plans } from '../assets/assets'
import { AppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from 'react-toastify';

const Buy = () => {

  const {backendURL, loadCreditsData} = useContext(AppContext)
  const navigate = useNavigate()
  const {sessionId, getToken} = useAuth()

  const initPay = async()=>{
    const option ={
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: "Credits Payment",
      order_id: order.id,
      recipit: order.recipit,
      handler: async(res)=>{
        console.log(res)
      
      const token = await getToken()

      try{
        const {data} = await axios.post(backendURL+'/api/user/verify-razor', res,{headers:{token}})
        if(data.success){
          loadCreditsData()
          navigate('/')
          toast.success('Done!')
        }
      }catch(err){
        console.log(err)
        toast.error(err.message)
      }
      }
    }
    const razor = new window.Razorpay(options)
    razor.open()
  }

  const paymentRazorPay = async(planId)=>{
    try{

      const token = await getToken()
      const {data} = await axios.post(backendURL+'/api/user/pay-razor',{planId}, {headers:{token}})
      if(data.success){
        initPay(data.order)
      }
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
  }

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-2'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6 bg-[#f9f8e6]'>Choose Your Adventure</button>
      <h1 className="text-center text-3xl mt-4 font-bold tracking-wide font-raleway antialiased bg-gradient-to-r from-[#ffffff] to-[#f7f6dc] bg-clip-text text-transparent mb-6 ">Don't Worry, There Are No Wrong Answers</h1>
      <div className='flex flx-wrap justify-center gap-6 text-left'>
        {Plans.map((item , index)=>(
          <div className='bg-[#f9f8e6] drop-shadow-md border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-300' key={index}>
            <img width={40} src={money} alt="money logo" />
            <p className='mt-3 font-semibold'>{item.id}</p>
            <p className='text-sm '>{item.desc}</p>
            <p className='mt-6'> 
              <span className='text-3xl font-medium'>${item.price}</span>/ {item.credits} credits
            </p>
            <button onClick={()=>paymentRazorPay(item.id)} className='w-full bg-gradient-to-r from-[#65c4f0] to-[#bd8803] rounded mt-8 text-[#f9f8e6] py-2.5 min-w-52'> Purchase</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Buy