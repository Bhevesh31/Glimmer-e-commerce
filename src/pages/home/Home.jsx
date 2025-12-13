import React, { useState } from 'react'
import Carousel from './Carousel'
import HomeCards from './HomeCards'
import product from "./product.json";


const Home = () => {

  
  return (
    <div className='flex flex-col items-center'>
      <Carousel/>
      <div className=' w-[97%] bg-gray-200 pb-5 rounded-xl mt-5'>
        <h1 className='text-3xl mt-5 ml-8'>Shop by category</h1>
        <div className='h flex justify-evenly flex-wrap '>
          {
            product.map((elem, idx)=>{
                
              return <HomeCards key={idx} category = {elem.category} name = {elem.name} images = {elem.image}/>
            })
          }
          
          
        </div>
        
      </div>
    </div>
  )
}

export default Home
