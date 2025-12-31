import React, { useContext, useEffect, useState } from 'react'
import { ProductDataContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'




const Cart = () => {

  const [total, setTotal] = useState(0);
  const  {allProducts, filterByCategory, filteredProducts, clickProd, addToCart, shoppingCart, setShoppingCart,checkoutData, setCheckoutData, checkoutProduct} = useContext(ProductDataContext)

  useEffect(()=>{
    setTotal(shoppingCart.reduce((sum,item)=>
      sum+(item.price* (item.qty || 1)),0
    ));
  },[shoppingCart]);

  const removeItem =(cartId)=>{
    setShoppingCart(prev=>prev.filter(item=>item.cartId !==cartId));
  }

  

  return (
    <div className='flex  w-full flex-col lg:flex-row gap-8 p-4 pt-6 lg:p-8 lg:h-[80vh]'>
      <div className=' flex-2  bg-neutral-300 border border-neutral-400  flex flex-col items-center'>
       <div className='w-full flex justify-start'>
        <h1 className='text-3xl mt-4 ml-5'>Shopping Cart</h1>
        </div>

      <div id='cartItem' className=' lg:w-full flex flex-col items-center mt-6 overflow-x-scroll'>

        {
          shoppingCart.length>0? (
            (shoppingCart || []).map((elem, idx)=>{
            
           return(
            <div key={idx} className='bg-white w-[92%] lg:w-[80%] flex shadow-[0_0_15px_rgba(0,0,0,0.3)]  pt-2 pb-3 mt-1.5 border border-neutral-500 rounded-xl'>
              <div>
                <img className='h-35 w-35' src={elem.thumbnail} alt="" />
              </div>
              <div className='flex flex-col justify-center'>
                <h1 className='font-bold'>{elem.title}</h1>
                {/* <h1>{elem.description.length>50? elem.description.substring(0,60)+"..." : elem.description}</h1> */}
                <p className='text-xl my-0.5'>₹{Math.floor((elem.price)*80).toLocaleString("en-IN")}.00</p>
                <p className='text-sm'>Sold by <span className='text-base'>{elem.sku}</span></p>
                <p className='mt-5 font-semibold'><span onClick={()=>removeItem(elem.cartId)} className='hover:text-amber-600 cursor-pointer whitespace-nowrap hover:scale-105'>SAVE FOR LATER</span><span onClick={()=>removeItem(elem.cartId)} className='hover:text-amber-600 ml-5 mr-2 lg:ml-7 cursor-pointer hover:scale-105'>REMOVE</span></p>
              </div>
            </div>
          ) 
        })):<h1 className='mt-8 mb-15 lg:mt-25 lg:mb-0 text-xl'>Your shopping cart is empty...</h1>
        }
      </div>

       


      </div>


      <div className='bg-neutral-300 border border-neutral-400 h-85 flex-1'>
        <div className='flex flex-col gap-4 pt-5 pl-4'>
          <div className='text-lg text-neutral-700 font-semibold border-b border-b-neutral-500'>Price details</div>
          <div className='flex justify-start gap-4'><p className='flex-2'>Price ({shoppingCart.length} items) </p><span className='flex-2'>₹ {(Math.floor(total*80) + shoppingCart.length*1000).toLocaleString("en-IN")}</span></div>
          <div className='flex justify-start gap-4'><p className='flex-2'>Discount</p><span className='flex-2'>₹ {(shoppingCart.length*1000).toLocaleString("en-IN")}</span></div>
          <div className='flex justify-start gap-4'><p className='flex-2'>Platform fee</p><span className='flex-2'>{(shoppingCart.length>0) ? "₹ 20" : "₹ 0"}</span></div>
          <div className='flex justify-start gap-4 text-2xl mt-2'><p className='flex-2'>Total Amount</p><span className='flex-2'>₹{(shoppingCart.length>0)? (Math.floor(total*80)+20).toLocaleString("en-IN") :0} </span></div>
        </div>
        <div className=' mt-8 flex flex-col items-center'>
          <Link className='w-[70%]' to={shoppingCart.length>0? "/checkout":"#"}>
            <button onClick={()=>checkoutProduct(shoppingCart)} className='py-2 w-full px-4 mb-4 lg:mb-0 text-lg rounded-2xl bg-amber-400 cursor-pointer'>Proceed to Buy</button>
          </Link>
          {shoppingCart.length<1 && <p className='text-sm text-center text-red-600 mt-2'>Add items to proceed further</p>}
        </div>
      </div>
    </div>
  )
}

export default Cart
