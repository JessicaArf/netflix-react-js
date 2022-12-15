import React from 'react'
import Logo from "../assets/netflix-logo.svg"

export const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
     <img src={Logo} alt="logo" className='max-h-12 m-3'/>
    <div>
      <button className='text-white pr-4'>Sign In</button>
      <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
    </div>
    </div>
  )
}
