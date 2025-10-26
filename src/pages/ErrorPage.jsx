import React from 'react'
import error from '../assets/error-404.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-between sm:justify-center items-center sm:p-10 p-4 min-h-screen'>
      <div>

       <img src={error} alt="" />
       <h2 className='text-2xl sm:text-5xl text-center font-bold py-2 sm:py-3'>Oops, page not found!</h2>
       <p className='text-gray-600 text-center py-2 sm:py-3'>The page you are looking for is not available.</p>
       <div className='pt-3 sm:pt-5 flex justify-center items-center'> 
       <Link to='/home' className='px-10 py-3.5 bg-violet-500 rounded-lg text-white font-semibold'>Go Back</Link>
       </div>
      
      </div>
    </div>
  )
}

export default ErrorPage
