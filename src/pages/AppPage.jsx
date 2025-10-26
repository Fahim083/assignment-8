import React from 'react'
import AppCard from '../components/AppCard.jsx'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
const AppPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className='px-2 sm:px-20 py-5 sm:py-8 text-center'>
      <h1 className='text-3xl sm:text-5xl font-bold pb-2  sm:pb-4'>Our All Applications</h1>
      <p className='text-gray-400 pb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-2  '>
        <p className='text-xl font-semibold'>{count} Apps Found</p>
        <div className='relative '>
        <input type="text"
        placeholder='Search Apps...'
        className='border border-gray-400 py-2 pl-9 rounded-lg w-72 focus:outline-violet-500'
        />
        <CiSearch className='text-gray-400 absolute left-2 top-3 text-xl'/>
        </div>
      </div>
      <div className="app-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3 sm:py-6">
<AppCard />
<AppCard />
<AppCard />
<AppCard />
<AppCard />
<AppCard />
<AppCard />
      </div>
      </div>
    </div>
  )
}

export default AppPage
