import React, { useContext, useEffect, useState } from 'react'
import { ProductDataContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'

const Checkout = () => {

  
  const  { addToCart, shoppingCart, setShoppingCart,checkoutData, setCheckoutData, checkoutProduct} = useContext(ProductDataContext)

  const [total, setTotal] = useState(0);

  useEffect(()=>{
      setTotal(checkoutData.reduce((sum,item)=>
        sum+(item.price* (item.qty || 1)),0
      ));
    },[checkoutData]);
    

  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <div className='bg-neutral-300    border border-neutral-400 h-100 w-1/2'>
      <div className='pt-5 pl-5 pb-2 flex items-center gap-2 border-b border-b-neutral-400'>
        <input className=' h-5 w-5' required id='cod' type="radio"  />
        <label htmlFor="cod">Cash on delivery</label> 
      </div>
        
        <div className='flex flex-col gap-4 pt-5 pl-4'>
          <div className='text-lg text-neutral-700 font-semibold border-b border-b-neutral-500'>Price details</div>
          <div className='flex justify-start gap-4'><p className='flex-2'>Price ({checkoutData.length} items) </p><span className='flex-2'>₹ {(Math.floor(total*80) + checkoutData.length*1000).toLocaleString("en-IN")}</span></div>
          <div className='flex justify-start gap-4'><p className='flex-2'>Discount</p><span className='flex-2'>₹ {(checkoutData.length*1000).toLocaleString("en-IN")}</span></div>
          <div className='flex justify-start gap-4'><p className='flex-2'>Platform fee</p><span className='flex-2'>₹ 20</span></div>
          <div className='flex justify-start gap-4 text-2xl mt-2'><p className='flex-2'>Total Amount</p><span className='flex-2'>₹ {(Math.floor(total*80)+20).toLocaleString("en-IN") } </span></div>
        </div>
        <div className=' mt-8 '>
          <Link className='w-full flex flex-col items-center ' to="/orderPlaced">
            <button onClick={()=>{
              if(checkoutData.length>1){
                setShoppingCart([])
              }
            }} className='py-2 w-[70%] px-4 text-lg rounded-2xl bg-amber-400  cursor-pointer'>Place order</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Checkout
