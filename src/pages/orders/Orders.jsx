import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div className='h-[75vh] flex flex-col justify-center gap-8 items-center'>
        <h1 className='text-2xl'>There are no orders to show</h1>
        <img className='mr-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-ssJYqG1YmMGp7c3dSVeUTg38uAZ-E0LrA&s" alt="" />
        <Link to="/">
            <button className='bg-teal-900 px-6 cursor-pointer hover:scale-105 active:scale-100 py-3 mt-3 rounded text-white text-lg'>Start shopping now</button>
        </Link>
        
    </div>
  )
}

export default Orders
