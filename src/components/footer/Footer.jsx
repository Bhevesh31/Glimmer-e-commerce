import React from 'react'

const Footer = () => {
  return (
    <div className='flex py-15 w-full justify-center gap-35 mt-10 bg-gray-900 text-white'>
      <div>
        <h1 className='text-lg font-bold mb-1'>Get to Know Us</h1>
        <div className='text-neutral-400 leading-7 '>
          <p className='hover:underline'>About Glimmer</p>
          <p className='hover:underline'>Career</p>
          <p className='hover:underline'>Press Releases</p>
        </div>
        
      </div>
      <div className='hidden md:block lg:block'>
        <h1 className='text-lg font-bold mb-1'>Connect with Us</h1>
        <div className='text-neutral-400 leading-7 '>
          <p className='hover:underline'>Facebook</p>
          <p className='hover:underline'>Twitter</p>
          <p className='hover:underline'>Instagram</p>
          <p className='hover:underline'>Whatsapp</p>
          <p className='hover:underline'>Email</p>
        </div>
        
      </div>
      <div className='hidden lg:block'>
        <h1 className='text-lg font-bold mb-1'>Let Us Help You</h1>
        <div className='text-neutral-400 leading-7 '>
          <p className='hover:underline'>Your Account</p>
          <p className='hover:underline'>Return Centre</p>
          <p className='hover:underline'>Product Safety Alerts</p>
          <p className='hover:underline'>100% Purchase Protection</p>
          <p className='hover:underline'>Help</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
