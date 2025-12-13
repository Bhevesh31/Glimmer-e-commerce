  import React, { useContext, useState } from 'react'
import { ProductDataContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'




const ProductDetail = () => {

    const  {allProducts, filterByCategory, filteredProducts, selectedProduct,addToCart, shoppingCart,checkoutProduct} = useContext(ProductDataContext)
  const [index, setIndex] = useState(0)
  const navigate = useNavigate();

  const changeImg=(idx)=>{
    setIndex(idx)
  }

  return (
     (selectedProduct.length>0)?
    <div className='flex h-screen'>
      <div className='flex-2 borde  flex'>
        <div className=' ml-5 mt-6 flex flex-col gap-2'>
          {
            selectedProduct[0].images.map((elem, idx)=>{
              
              return  <img onMouseOver={()=>changeImg(idx)} onClick={()=>changeImg(idx)} key={idx} className='border border-neutral-300 cursor-pointer h-25 w-25 shadow-[0_0_13px_rgba(0,0,0,0.2)] hover:shadow-xl'  src={elem} alt="" />
            })
          }
         
          
        </div>
        <div className='flex justify-center '>
          <img className='h-100 w-110 mt-5' src={selectedProduct[0].images[index]} alt="" />
        </div>
      </div>





      <div className='flex-3 pl-2 overflow-y-scroll'>
        <div id='details' className='mt-12'>
          <h1 className='font-semibold text-lg'>{selectedProduct[0].title}</h1>
          <h2 className='mb-2'>{selectedProduct[0].description}</h2>
          <p><span className={` ${selectedProduct[0].rating>3? "bg-green-400": "bg-yellow-400"} rounded font-semibold text-sm py-0.5 px-1.5 `} >{(selectedProduct[0].rating).toFixed(1)} ✰</span><span className='ml-2 text-gray-600 text-sm font-semibold'>11 Rating & {selectedProduct[0].reviews.length} Reviews</span></p>
          <p className='text-2xl mt-2'>₹{Math.floor((selectedProduct[0].price)*80).toLocaleString("en-IN")}.00 <span className='text-lg text-neutral-700'>M.R.P: <span className='line-through'>₹ {(Math.floor((selectedProduct[0].price)*80) + Math.floor((selectedProduct[0].discountPercentage/100)*((selectedProduct[0].price)*80))).toLocaleString("en-IN")}.00</span><span className='ml-1 text-green-800 text-base'>{selectedProduct[0].discountPercentage>1 ? Math.floor(selectedProduct[0].discountPercentage): selectedProduct[0].discountPercentage}% off</span></span></p>
        </div>


        <div id="buttons" className='flex flex-col text-white text-lg gap-7 mt-7 '>
          <button onClick={()=>addToCart(selectedProduct[0].id)} className='bg-teal-700 font-semibold px-3 py-[13px] w-[65%] shadow-lg cursor-pointer hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] active:scale-95'>ADD TO CART</button>
          <Link to="/checkout">
            <button onClick={()=>checkoutProduct(selectedProduct)} className='bg-teal-700 font-semibold px-3 py-[13px] w-[65%] shadow-lg cursor-pointer hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] active:scale-95'>BUY NOW</button>
          </Link>
          
        </div>


        <div id="bank" className='mt-8 leading-7'>
          <h1 className='font-bold'>Available offers</h1>
          <p className='font-bold'>Bank offer <span className='font-medium text-sm'>Get additional 5% up to 1250 off on  Axis or  SBI Credit Card Transactions</span></p>
          <p className='font-bold'>Bank offer <span className='font-medium text-sm'>5% cashback on Axis Bank  Debit Card up to ₹750</span></p>
          <p className='font-bold'>Bank offer <span className='font-medium text-sm'>5% cashback on  SBI Credit Card upto ₹4,000 per calendar quarter</span></p>
        </div>

        <div id="otherDetails" className='flex w-[97%] rounded-xl gap-5 mt-8 border shadow-lg border-neutral-400 px-4 ml-1 py-4'>
          <div className='leading-9 text-gray-700 font-semibold'>
            <h1>Delivery: </h1>
            <h1>Return: </h1>
            <h1>Dimensions: </h1>
            <h1>Warranty:</h1>
            <h1>Description: </h1>
          </div>
          <div className='leading-9'>
            <p>{selectedProduct[0].shippingInformation}</p>
            <p>{selectedProduct[0].returnPolicy}</p>           
            <p>{selectedProduct[0].dimensions.height} &#215; {selectedProduct[0].dimensions.width} &#215;  {selectedProduct[0].dimensions.depth} </p>
            <p>{selectedProduct[0].warrantyInformation}</p>
            <p className='leading-6'>{selectedProduct[0].description}</p>
          </div>          
        </div>

        <div id="reviews" className='border border-neutral-400 mt-10 w-[97%] p-4 shadow-xl rounded-xl ml-1'>
            <div className='flex items-center gap-8 mb-12'>
              <h1 className='text-xl font-semibold'>Ratings & Reviews</h1>
              <h1 className='text-4xl font-bold'>{(selectedProduct[0].rating).toFixed(1)}✰<span className='ml-2 block text-gray-600 text-sm font-semibold'>11 Rating & {selectedProduct[0].reviews.length} Reviews</span></h1>
            </div>
            <div>
              {
                selectedProduct[0].reviews.map((elem,idx)=>{
               
                  return <div key={idx} className='border-t border-neutral-300 shadow py-4 pl-2'>
                    <h1 className='mb-2'><span className='bg-green-400 py-0.5 px-2 rounded'>{elem.rating} ✰</span><span className='ml-4 font-semibold text-lg'>{elem.comment}</span></h1>
                    <p className='text-[15px] text-gray-600'>{elem.reviewerName}</p>
                    <p className='text-[15px] text-gray-600'>{elem.reviewerEmail} <span className='text-sm ml-4 text-gray-500'>4 months ago</span></p>
                  </div>
                })
              }
            </div>
        </div>
        
          
      </div>
    </div>
    :
    navigate("/")


   
  )
}

export default ProductDetail
