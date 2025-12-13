
import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductDataContext } from '../../context/ProductContext'

const PrdouctListing = () => {

  const {allProducts, filterByCategory, filteredProducts, setFilteredProducts} = useContext(ProductDataContext)

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(12);
  
  const indexOfLastItem = currentPage * cardsPerPage;
  const indexOfFirstItem = indexOfLastItem - cardsPerPage;
  const currentItems = filteredProducts?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length/cardsPerPage)

  const handlePrev=()=>{
    setCurrentPage((prev)=>Math.max(prev-1, 1));
  }
  
  const handleNext=()=>{
    setCurrentPage((prev)=>Math.min(prev+1, totalPages));
  }

  const handlePageClick=(pageNo)=>{
    setCurrentPage(pageNo);
  }

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  }, [currentPage])
  
  const sortProducts =(type)=>{

    let sorted = [...filteredProducts];

    switch(type){
      case "popularity":
        sorted.sort((a,b)=>b.rating-a.rating);
        break;
      
      case "lowToHigh":
        sorted.sort((a,b)=>a.price-b.price);
        break;

      case "highToLow":
        sorted.sort((a,b)=>b.price-a.price);
        break;

      case "discount":
        sorted.sort((a,b)=>b.discountPercentage-a.discountPercentage);
        break;
      
      default:
        sorted = [...allProducts]
    }
    setFilteredProducts(sorted);
  }

  return (
    <div className='grid grid-cols-[1fr]'>
      <div className=''>
        <div id='sorting' className='flex gap-9 mt-4 pl-14 border-b border-neutral-400 '>
          <h1 className='font-bold'>Sort by</h1>
          <span onClick={()=>sortProducts("popularity")} className='font-light cursor-pointer'>Popularity</span>
          <span onClick={()=>sortProducts("lowToHigh")} className='font-light cursor-pointer'>Price--Low to High</span>
          <span onClick={()=>sortProducts("highToLow")} className='font-light cursor-pointer'>Price--High to Low</span>
          <span onClick={()=>sortProducts("discount")} className='font-light cursor-pointer'>Discount</span>
          
          
        </div>
        {filteredProducts.length>100 && <h1 className='text-4xl mt-7 ml-8'>All products</h1>}

        <div id="list" className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-6.5 mt-7 px-8'>
          {
            currentItems.map((elem, idx)=>{
              return <ProductCard key={idx} details={elem}/>
            })
          }    
        </div>
        <div className='text-white flex justify-center gap-2 mt-15'>
          <button onClick={handlePrev} disabled={currentPage===1} className='px-3 py-2 rounded bg-gray-800  disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50'>Previous</button>
          {Array.from({length: totalPages}, (_, index)=>(
            <button onClick={()=>handlePageClick(index+1)} className={`px-3 py-2 rounded ${currentPage===index+1 ? "bg-blue-600 text-white border-blue-600":"bg-gray-800 text-white hover:bg-gray-600 border-gray-600"}`}>{index+1}</button>
          ))}
          <button onClick={handleNext}  disabled={currentPage===totalPages} className='px-3 py-2 rounded bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-50'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default PrdouctListing
