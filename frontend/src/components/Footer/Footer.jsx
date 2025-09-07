import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-4 p-[15px] md:p-[50px] pt-[80px] list-none mt-5 z-10' id='footer'>
        <div className='w-full grid grid-cols-[2fr_1fr_1fr] md:gap-[80px] gap-[40px]'>
            <div className='flex flex-col items-start gap-5'>
                <p className='text-[2.2vw] md:text-4xl font-bold text-orange-500'>Zestify</p>
                <p className='text-[2.2vw] md:text-2xl'>Your one-stop destination for premium products across all categories. We bring you the finest collection of jewelry, fashion, electronics, beauty products, and more at unbeatable prices!</p>
                <div className='flex justify-between gap-4 w-8 md:w-10'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-start  gap-5'>
                <h2 className='text-white md:text-2xl text-[3vw] font-bold'>COMPANY</h2>
                <ul>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About us</li>
                    <li className='cursor-pointer'>Shipping</li>
                    <li className='cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-5'>
                <h1 className='text-white md:text-2xl text-[3vw] font-bold'>GET IN TOUCH</h1>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@zestify.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-1 m-[20px_0px] ' />
        <p>Copyright 2024 Zestify.com</p>
    </div>
  )
}

export default Footer