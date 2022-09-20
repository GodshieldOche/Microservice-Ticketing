import React from 'react'
import Header from './Header'

const Layout = ({children, currentUser}: any) => {
    return (
      <div className='h-full min-h-screen w-full !bg-[#1F2A37] text-white'>
        <Header user={currentUser}  />
        {children}
      </div>
  )
}

export default Layout