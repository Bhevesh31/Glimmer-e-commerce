import React, { useEffect, useState } from 'react'
import data from "./data.json";

const Carousel = () => {

    const [index, setIndex] = useState(0);
    
    const handleNext =()=>{

        setIndex((prevValue)=>{
            if(prevValue == data.length-1){
                return 0;
            }
            return prevValue+1;
        })
        
    
    }

    const handlePre = ()=>{
        if(index==0){
            setIndex(data.length-1)
        }
        else{
            setIndex(index-1)
        }
    }

    useEffect(()=>{
        setInterval(handleNext, 3000)
    },[])


  return (
    <div className='h-68 w-full mt-5 bg-gray-600 relative'>
        <div>
          <button onClick={handlePre} className='absolute top-[38%] left-4 bg-white/80 hover:bg-white duration-300 p-3 backdrop-blur-md hover:scale-110 transition-transform text-gray-700 rounded-full shadow-lg px-2 py-2 cursor-pointer text-4xl font-extrabold'>{"<"}</button>
        </div>
        <img className='w-full h-72 object-fit' src={data[index].url} alt="" />
        <div>
          <button onClick={handleNext} className='absolute top-[38%] right-4  bg-white/80 hover:bg-white duration-300 p-3 backdrop-blur-md hover:scale-110 transition-transform text-gray-700 rounded-full shadow-lg px-2 py-2 cursor-pointer text-4xl font-extrabold'>{">"}</button>
        </div>
      </div>
  )
}

export default Carousel
