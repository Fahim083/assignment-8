import React from 'react'

const Trust = () => {
  return (
    <div className='bg-violet-600 px-2 sm:px-52 py-10 sm:py-16 text-white text-center '>
      <h2 className='text-3xl font-semibold pb-5'>Trusted by Millions, Built for You</h2>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-5'>
        <div>
            <p>Total Downloads</p>
            <h3 className='text-5xl font-bold py-3'>29.6M</h3>
            <p>21% more than last month</p>
        </div>
        <div>
            <p>Total Reviews</p>
         <h3 className='text-5xl font-bold py-3'>906K</h3>
            <p>46% more than last month</p>
        </div>
        <div>
            <p>Active Apps</p>
            <h3 className='text-5xl font-bold py-3'>132+</h3>
            <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  )
}

export default Trust
