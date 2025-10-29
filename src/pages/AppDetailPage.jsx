import React from 'react'
import { useParams } from 'react-router-dom'
import logo from '../assets/logo.png'
import ratng from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'
import review from '../assets/icon-review.png'
const AppDetailPage = () => {
  return (
    <div className='p-2 sm:p-20'>
      <div className='flex flex-col sm:flex-row gap-5 sm:gap-10'>
        <img src={logo} className='border h-80 sm:h-96 w-96 object-cover rounded-md' alt="" />
        <div className='w-full'>
    <h1 className='text-3xl font-semibold pb-2 sm:pb-4'>SmPlan:ToDo List with Reminder</h1>
    <h3 className='text-lg text-gray-700 border-b-[2px] pb-3 sm:pb-7 border-gray-200'>Developed by <span className='text-violet-500'>productive.io </span></h3>
    <div className='flex py-7 sm:py-10 justify-between items-center '>
      <div className='flex flex-col items-start gap-3'>
        <img src={download} alt="" />
        <p className='text-gray-600'>Downloads</p>
        <h4 className='text-4xl font-bold'>8M</h4>
        </div>
        <div className='flex flex-col items-start gap-2'>
        <img src={ratng} alt="" />
       <p className='text-gray-600'>Avarage Rating</p>
       <h4 className='text-4xl font-bold'>4.9</h4>
        </div>
       <div className='flex flex-col items-start gap-2'>
        <img src={review} alt="" />
        <p className='text-gray-600'>Total Review</p>
         <h4 className='text-4xl font-bold'>20K</h4>
        </div>
    </div>
    <button className='px-4 sm:px-6 py-2 sm:py-3 bg-green-600 rounded-lg text-white font-semibold'>Install App</button>
        </div>
      </div>
      <div>

      </div>
      <div>
        <p className='text-xl font-semibold py-3 sm:py-5'>Description</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dignissimos neque facilis voluptatibus placeat? Beatae perspiciatis vel vitae iure facere.</p>
      </div>
    </div>
  )
}

export default AppDetailPage
