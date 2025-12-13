import React, { useContext } from 'react'
import { ProductDataContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom';





const ProductCard = ({details}) => {

  const  {allProducts, filterByCategory, filteredProducts, clickProd, addToCart} = useContext(ProductDataContext)

    const titleClick =(id)=>{
        console.log(id);
        
    }
    
  return (
    
    <div className=' bg-neutral-300 px-3 flex flex-col mt-  ml- pt-2 shadow-[0_0_11px_rgba(0,0,0,0.2)] pb-4'>
              <img className='h-50 mt-2 mb-4 ' src={details.thumbnail} alt="" />
              <div>
                <Link to="/product">
                <h1 onClick={()=>clickProd(details.id)} className='cursor-pointer text-lg font-semibold hover:text-amber-700 duration-100'>{details.title} <br /><span className='leading-5 text-md font-normal'>{details.description.length>50? details.description.substring(0,60)+"..." : details.description}</span> </h1>
                </Link>

                <p className='my-1 text-sm'>{(details.rating).toFixed(1)} <span className='text-amber-600 font-extrabold text-xl'>✰</span></p>
                <p className='text-2xl'><span className='text-lg '>₹</span>{Math.floor((details.price)*80).toLocaleString("en-IN")}.00 </p>
                <span className='text-lg text-neutral-700'>M.R.P: <span className='line-through'>₹ {(Math.floor((details.price)*80) + Math.floor((details.discountPercentage/100)*((details.price)*80))).toLocaleString("en-IN")}.00</span> <span className='ml-1 text-green-800 text-base'>{details.discountPercentage>1 ? Math.floor(details.discountPercentage): details.discountPercentage}% off</span></span>
                <p className='text-sm font-medium mt-1'>{(Math.floor((details.price)*80)>500)?"FREE delivery":"Delivery charge ₹ 40"}</p>
                {details.stock<5 && <p className='text-red-800 text-sm mt-0.5'>Only few left in stock</p> }
                
                <button onClick={()=>addToCart(details.id)} className='py-1.5 px-3.5 rounded-lg cursor-pointer bg-amber-400  mt-4 hover:scale-105 active:scale-95'>Add to cart</button>

              </div>
          </div>
  )
}

export default ProductCard
