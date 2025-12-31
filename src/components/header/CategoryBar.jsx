import React, { useContext } from 'react'
import CategoryBarContent from './CategoryBarContent'
import categoryData from "./categoryData.json";
import { Link } from 'react-router-dom'
import { ProductDataContext } from '../../context/ProductContext'

const CategoryBar = () => {

    const  {allProducts, filterByCategory, filteredProducts,setFilteredProducts} = useContext(ProductDataContext)

  return (
    
    <div>
      <div className='flex-2 bg-[#f8d04a] overflow-x-scroll lg:overflow-auto flex gap-5 lg:gap-0 lg:flex items-center px-4 lg:px-7 py-2 justify-evenly text-[17px] '>
        <Link to="products">
          <h1 onClick={()=>setFilteredProducts(allProducts)} className='font-semibold whitespace-nowrap mt-1 hover:text-orange-800 border-transparent hover:border-orange-800 border-b-2'>All Products</h1>
        </Link>
        {
            categoryData.map((elem,idx)=>{
                
                return <CategoryBarContent key={idx} name = {elem.name} category={elem.category}/>
            })
        }
        
      </div>
    </div>
    
  )
}

export default CategoryBar
