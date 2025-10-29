import React from 'react'
import error from '../assets/App-error.png'
import { Link } from 'react-router-dom'

const AppErrorPage = () => {
  return (
    <div className='flex flex-col justify-between sm:justify-center items-center sm:p-10 p-4 min-h-screen'>
      <div>

       <img src={error} alt="" className='pl-2 sm:pl-16' />
       <h2 className='text-2xl sm:text-5xl text-center font-bold  py-3'>OPPS!! APP NOT FOUND</h2>
       <p className='text-gray-600 text-center py-2 sm:py-3'>The App you are requesting is not found on our system.  please try another apps</p>
       <div className='pt-3 sm:pt-5 flex justify-center items-center'> 
       <Link to='/home' className='px-10 py-3.5 bg-violet-500 rounded-lg text-white font-semibold'>Go Back</Link>
       </div>
      
      </div>
    </div>
  )
}

export default AppErrorPage
