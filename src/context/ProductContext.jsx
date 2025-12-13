import React, { createContext, useEffect, useState } from 'react'
import productData from "./productData.json"

  export const ProductDataContext = createContext();

const ProductContext = (props) => {

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutData, setCheckoutData] = useState([])


  const checkoutProduct =(data)=>{
    setCheckoutData(data)
    console.log(checkoutData);
    
  }

  const filterByCategory =(cat)=>{
    setFilteredProducts(allProducts.filter(p=>p.category===cat)
    );
  
  }

  const clickProd = (idx)=>{
    setSelectedProduct(allProducts.filter(p=>p.id===idx))
  }

  const addToCart=(idx)=>{
    const item = allProducts.find(p=>p.id===idx)
    
    setShoppingCart(prev=>[...prev,{...item, cartId:crypto.randomUUID()}])
    
  }
  useEffect(()=>{

    setAllProducts(productData);
    setFilteredProducts(productData);
  },[])

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  }, [selectedProduct])


  return (
    <div>
      <ProductDataContext.Provider value={{allProducts,filterByCategory, filteredProducts, setFilteredProducts, clickProd, selectedProduct, addToCart, shoppingCart, setShoppingCart,checkoutData, setCheckoutData, checkoutProduct}}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
