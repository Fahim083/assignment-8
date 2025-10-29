import React from 'react'
import logo from '../assets/logo.png'
import rating from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'

const InstallCard = () => {
  return (
    <div className='p-2 sm:p-4 bg-white rounded-md my-5 flex justify-between items-center shadow-md'>
      <div className='flex gap-3'>
        <img src={logo} className='w-16 h-16 object-cover' alt="" />
         <div className='flex flex-col  items-start gap-5'>
            <p className='text-xl font-medium'>App Name</p>
            <div className='flex justify-between items-center gap-3'>
                <div className='flex gap-3 items-center py-1 rounded-md text-green-600 text-sm font-medium'>
                 <img src={download} alt="" className='w-4 h-4 object-cover'/>
                 <p>9M</p>
               </div>
             <div className='flex items-center gap-2  px-2 py-1 rounded-md text-orange-600 text-sm font-medium'>
                 <img src={rating} alt="" className='w-4 h-4 object-cover'/>
                 <p>5</p>
               </div>
        <p className='text-gray-500'>234 MB</p>
            </div>
             </div>
      </div>
      <button className='text-lg text-white bg-green-500 px-4 py-1 hover:cursor-pointer rounded-md font-semibold '>Uninstall</button>
    </div>
  )
}

export default InstallCard
