import React from 'react'
import rating from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const AppCard = ({app}) => {
  return (
      <Link to={`/apps/${app?.id}`}>
    <div className='h-96 p-4 bg-white rounded-lg shadow-md flex flex-col justify-between gap-3'>
      <img src={app?.image}alt="app logo" className='rounded-lg border h-80 object-cover'/>
      <h3 className='text-start text-lg font-semibold line-clamp-1'>{app?.title}</h3>
       <div className='flex justify-between items-center'>
         <div className='flex gap-3 items-center bg-green-100 px-2 py-1 rounded-md text-green-600 text-sm font-medium'>
          <img src={download} alt="" className='w-4 h-4 object-cover'/>
          <p>{app?.downloads/1000000}M</p>
        </div>
      <div className='flex items-center gap-2 bg-orange-100 px-2 py-1 rounded-md text-orange-600 text-sm font-medium'>
          <img src={rating} alt="" className='w-4 h-4 object-cover'/>
          <p>{app?.ratingAvg}</p>
        </div>
      </div>
    </div>
</Link>
  )
}

export default AppCard
