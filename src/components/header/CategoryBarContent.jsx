import React, { useContext } from 'react'
import { ProductDataContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'


const CategoryBarContent = ({category, name}) => {

  const  {allProducts, filterByCategory, filteredProducts, selectedProduct} = useContext(ProductDataContext)

  return (
    <Link to="/products">
    <div  className='font-semibold mt-1 hover:text-orange-800 border-transparent hover:border-orange-800 border-b-2' >
      
      <span className='whitespace-nowrap' onClick={()=>filterByCategory(category)}>{name}</span>
    </div>
    </Link>
  )
}

export default CategoryBarContent 
