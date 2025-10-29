import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa6'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-lg sm:shadow-xl px-2 sm:px-20 py-4'>
      <NavLink to="/">
      <div className='flex justify-between items-center gap-2' >
        <img src={logo} alt="logo" className='w-7 h-7 object-cover'/>
        <div>
        <h1 className='text-lg font-bold text-violet-600 hidden  sm:block'>HERO.IO</h1>
        </div>
      </div>
      </NavLink>
      <div className='flex justify-center items-center gap-4 sm:gap-10 text-[17px]'>
   <NavLink
  to="/home"
  className={({ isActive }) =>
   isActive
      ? "text-violet-600 font-semibold border-b-2 border-violet-600"
      : " hover:text-violet-500"
  }
>Home</NavLink>
        <NavLink
  to="/apps"
  className={({ isActive }) =>
   isActive
      ? "text-violet-600 font-semibold border-b-2 border-violet-600"
      : " hover:text-violet-500"
  }
>
  Apps
</NavLink>
             <NavLink
  to="/installation"
  className={({ isActive }) =>
    isActive
      ? "text-violet-600 font-semibold border-b-2 border-violet-600"
      : " hover:text-violet-500"
  }
>
      Installation
</NavLink>
      </div>
      <div className='flex'>
        <NavLink className='flex items-center gap-2 px-3 py-1 rounded-md text-white bg-violet-500 font-medium hover:bg-violet-600 text-lg' to="https://github.com/Fahim083">
        <FaGithub/>
        <p className='hidden sm:block'>contribution</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Header

