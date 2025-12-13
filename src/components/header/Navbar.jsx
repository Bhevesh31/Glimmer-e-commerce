import React, { useContext, useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import { Search} from 'lucide-react';
import { CircleUserRound} from 'lucide-react';
import { ShoppingCart} from 'lucide-react';
import { Store} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductDataContext } from '../../context/ProductContext';
import categoryData from "./categoryData.json";
import { useFirebase } from '../../context/AuthContext'
import suggestionsData from "./suggestionsData.json"

const Navbar = () => {


    const firebase = useFirebase();
    const [searchedItem, setSearchedItem] = useState("")

    const  {allProducts, filterByCategory, filteredProducts, setFilteredProducts, clickProd, addToCart, shoppingCart, setShoppingCart} = useContext(ProductDataContext)

    const showSearchedItem=(cat)=>{
        setSearchedItem("")
        setFilteredProducts(allProducts.filter(p=>p.category===cat))
    }
    
    const suggestions = suggestionsData.filter(item=> item.name.toLowerCase().includes(searchedItem.toLowerCase())).slice(0,5);
    


    

  return (
    <div className='py-3 sticky top-0 z-50 flex bg-green-200'>
        <div id='logo' className='flex-1 h-full flex items-center justify-center'>
            <div className='text-cyan-950 ml-8 text-4xl'>
                <Link to="/">
                <h1 onClick={()=>{
                    window.scrollTo({
                        top:0,
                        behavior:"smooth",
                    });
                }}>Glimmer</h1>
                </Link>
                
            </div>
        </div>
        <div  id='search' className='flex-3 flex items-center'>
            <div className='w-[92%] flex items-center px- ml-6 border relative rounded-xl'>
                
                <input value={searchedItem} onChange={(e)=>setSearchedItem(e.target.value)} className='w-[92%] ml-2 pl-2 py-[7.5px] outline-none placeholder:text-gray-700 placeholder:text-[18px]' type="text" placeholder='Search for products' />
                <Link to={searchedItem===""? "/":"products"}>
                
                <div onClick={()=>{ 
                    showSearchedItem(searchedItem);
                    window.scrollTo({
                        top:0,
                        behavior:"smooth",
                    });
                     }}  className='border-l py-2.5 cursor-pointer hover:shadow-[0_0_11px_rgba(0,0,0,0.3)] px-4'><Search size={20} strokeWidth={1.75} /></div>
                </Link>
                {
                    searchedItem.length>0 && <ul id='suggestion' className='absolute bg-neutral-100 top-10.5 w-full  rounded '>
                    {
                        suggestions.map((elem)=>{
                            return <li onClick={()=>setSearchedItem(elem.category)} className=' cursor-pointer hover:bg-neutral-300 py-0.5 my-2 mx-1'>
                                {elem.category.toLowerCase()}
                            </li>
                        })
                    }
                </ul>
                }
                
            </div>
        </div>


        <div id='navRight' className='flex-3 flex items-center justify-start gap-12 pr-3'>

            {
                !(firebase.isLoggedIn) ?<Link to="login">
                <div onClick={()=>{
                    window.scrollTo({
                        top:0,
                        behavior:"smooth",
                    });
                }} className='flex items-center gap-2 ml-5 relative text-lg'>
                    <CircleUserRound size={25} strokeWidth={1.75} />
                    <span>Login</span>
                    
                </div>
                 </Link>
                 :
                <Link to="profile">
                <div onClick={()=>{
                    window.scrollTo({
                        top:0,
                        behavior:"smooth",
                    });
                }} className='flex items-center gap-2 ml-5 relative text-lg'>
                    <CircleUserRound size={25} strokeWidth={1.75} />
                    <span >{firebase.user.displayName? firebase.user.displayName : (firebase.user.email).slice(0,8)}</span>
                   
                </div>
            </Link>
            }
            
            
            <Link to="orders">
            <div onClick={()=>{
                window.scrollTo({
                        top:0,
                        behavior:"smooth",
                    });
            }} className='text-[15px] leading-4'>
                <span className='block'>Returns</span>
                <span className='font-semibold'>& Orders</span>
            </div>
            </Link>
            <Link to="cart" >
                <div onClick={()=>{
                    window.scrollTo({
                        top:0,
                        behavior:"smooth",
                         });
                }} className='flex items-center gap-2 relative text-lg'>
                    <ShoppingCart size={25} strokeWidth={1.75} />
                    <div className='h-4.5 w-4.5 bg-red-500 text-white rounded-full flex justify-center items-center absolute right-9 -top-[5px] text-sm font-bold'>{shoppingCart.length}</div>
                    <span className=''>Cart</span>
                </div>
            </Link>
            
            <div className='flex items-center gap-2 text-lg'>
                <Store size={22} strokeWidth={1.75} />
                <span>Merchant</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
