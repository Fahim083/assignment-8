import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
const Layout = () => {
  return (
    <div>
        <Header/>
        <div className='bg-gray-50'>

        <Outlet/>
        </div>
        <Footer/>  
    </div>
  )
}

export default Layout
