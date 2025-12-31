import React, { useContext } from 'react'
import { ProductDataContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'

const HomeCards = ({category, name, images}) => {

  const  {allProducts, filterByCategory, filteredProducts} = useContext(ProductDataContext)
  
  return (
    <Link to="/products">
    <div onClick={()=>{
      filterByCategory(category)
      
      }} className='h-60 lg:h-83  relative rounded-xl shadow-[0_0_11px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-105  transition-all duration-300 bg-gray-50 hover:bg-white flex flex-col items-center cursor-pointer mt-5 justify-center gap-2'>
        <h1 className='text-xl absolute left-8 top-1.5 font-semibold mt-2'>{name}</h1>
        <div className='flex flex-wrap mt-5 justify-center'>
            <img className='h-45 w-45 lg:h-30 lg:w-30' src={images.img1} alt="" />
            <img className='h-30 w-30 hidden lg:block' src={images.img2} alt="" />
            <img className='h-30 w-30 hidden lg:block' src={images.img3} alt="" />
            <img className='h-30 w-30 hidden lg:block' src={images.img4} alt="" />
        </div>
      
    </div>
    </Link>
  )
}

export default HomeCards
