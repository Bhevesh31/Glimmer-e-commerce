import React from 'react'
import { Link } from 'react-router-dom'

const OrderPlaced = () => {


    
  return (
    <div className='h-[68vh] flex justify-center items-center'>
      <div className='flex flex-col gap-7 items-center'>
        <p className='text-xl'>Your order is placed successfully 🎉 </p>
        <h1 className='text-3xl'>Thanks for shopping</h1>
        <Link to="/">
            <h1 className='text-xl underline mt-5'>{"Continue shopping >>"}</h1>
        </Link>
        
      </div>
    </div>
  )
}

export default OrderPlaced
