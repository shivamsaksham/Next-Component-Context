import React from 'react'
import MainNavbar from '../Navs/mainNavbar'

const MainLayout = ({children}) => {
  return (
    <div>
        <MainNavbar/>
        {children}
    </div>
  )
}

export default MainLayout