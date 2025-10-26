import React from 'react'
import AppCard from './AppCard.jsx'
import { Link } from 'react-router-dom'
const TreandigApp = () => {
  return (
    <div className='px-2 sm:px-20 py-6 sm:py-12 text-center'>
      <h1 className='text-3xl sm:text-5xl font-bold pb-2  sm:pb-4'>Trending Apps</h1>
      <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
      <div className="app-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3 sm:py-6">
<AppCard />
<AppCard />
<AppCard />
<AppCard />
<AppCard />
<AppCard />
<AppCard />
      </div>
      <div className='flex justify-center pt-4'>
      <Link to='/apps' className='px-10 py-3.5 bg-violet-500 rounded-lg text-white font-semibold'>Show All</Link>
      </div>
      
    </div>
  )
}

export default TreandigApp
