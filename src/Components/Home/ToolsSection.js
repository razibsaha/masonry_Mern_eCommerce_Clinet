import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'

const ToolsSection = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <section>
        <h1>ToolsSection</h1>
        <div><h1>Total tools : {products.length}</h1></div>\
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            products.map(product=> <Product key={product._id} product={product}></Product>)
        }
        </div>
      
        </section>
    );
};
export default ToolsSection;