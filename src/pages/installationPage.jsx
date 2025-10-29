import React from 'react'
import InstallCard from '../components/installCard.jsx'

const installationPage = () => {
  return (
    <div className='p-4 sm:p-16'>
     <h1 className='text-3xl sm:text-5xl font-bold pb-2  sm:pb-4 text-center'>Your Installed Apps</h1>
    <p className='text-gray-400 pb-5 text-center'>Explore All Trending Apps on the Market developed by us</p>
     <div className='flex justify-between items-center'>
      <h1>3 App Found</h1>
      <select>
        <option value="default">Sort By</option>
        <option value="asc">ASC</option>
        <option value="dsc">DSC</option>
      </select>
       </div>
      <div>
        <InstallCard />
        <InstallCard />
        <InstallCard />
     
     </div>
    </div>
  )
}

export default installationPage
