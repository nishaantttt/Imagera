import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row items-center justify-between gap-4 py-6 mt-16 border-t border-slate-800'>
      <div className='flex items-center gap-2'>
        <img src={assets.logo} alt="Imagera logo" width={34} />
        <div className='flex flex-col'>
          <span className='text-sm font-semibold tracking-tight'>Imagera</span>
          <span className='text-[11px] text-slate-400'>Text to image in seconds</span>
        </div>
      </div>

      <p className='flex-1 sm:text-center sm:border-l sm:border-r border-slate-800 sm:px-4 text-xs sm:text-sm text-slate-500 max-sm:hidden'>
        © {new Date().getFullYear()} Imagera · Crafted by Swapnaneel · All rights reserved
      </p>

      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt="" width={32} className='opacity-80 hover:opacity-100 transition-opacity cursor-pointer'/>
        <img src={assets.twitter_icon} alt="" width={32} className='opacity-80 hover:opacity-100 transition-opacity cursor-pointer'/>
        <img src={assets.instagram_icon} alt="" width={32} className='opacity-80 hover:opacity-100 transition-opacity cursor-pointer'/>
      </div>
    </footer>
  )
}

export default Footer
