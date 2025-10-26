import React from 'react'
import logo from '../assets/logo.png'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    < div className='bg-black pt-2'>
    <div className='bg-black flex justify-between items-center gap-4 py-3 px-2 sm:px-20'>
        <div className='flex justify-center items-center py-3 text-white gap-2'>
            <img className='w-7  mx-auto' src={logo} alt="logo" />
            <h2 className='text-center text-sm font-bold'>HERO.IO</h2>
        </div>
         <div className='text-white flex flex-col justify-center items-center gap-2'>
    <p className='font-semibold'>Social Link</p>
    <div className='text-white'>
        <FaSquareXTwitter className='inline mx-2 cursor-pointer hover:text-blue-400'/>
        <FaFacebookF className='inline mx-2 cursor-pointer hover:text-blue-600'/>
        <FaLinkedinIn className='inline mx-2 cursor-pointer hover:text-blue-700'/>
        <FaInstagram className='inline mx-2 cursor-pointer hover:text-pink-500'/>
    </div>
        </div>
    </div>
        <p className='text-center text-sm text-gray-500 pb-6'>© 2023 HERO.IO. All rights reserved.</p>   
    </div>
  )
}

export default Footer
