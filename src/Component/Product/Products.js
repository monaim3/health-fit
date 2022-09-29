import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Products.css'
const Products = () => {
    const [products,setProdcut]=useState([])
    const [carts,setCart]=useState([])
   
    useEffect(()=>{
        fetch('./fakeDb.json')
        .then(res=>res.json())
        .then(data=>setProdcut(data))
    },[])
  
    const handleCart=(product)=>{
      const addeItms=[...carts,product]
      setCart(addeItms)
    }
    return (
        <>
            <div className='wrapper mt-6 p-2'>
                <div className="product-area" >
                    
                    {
                        products.map(element=><Product element={element} key={element.id} handleCart={handleCart}></Product>)
                    }
                </div>
                <div className="cart-area shadow-xl">
                   
                 <Cart cart={carts}></Cart>
                      
                   
                </div>
            </div>
        </>
    );
};

export default Products;