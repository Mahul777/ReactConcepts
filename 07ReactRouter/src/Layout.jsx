import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
// The Header and Footer stay the same, while the content inside the Outlet changes based on the current route.
function Layout() {
  return (
    <>
       <Header/>
       <Outlet />
       <Footer/>
    </>
  )
}

export default Layout