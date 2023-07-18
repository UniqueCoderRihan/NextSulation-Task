import React, { useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    fetch('Product.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    return (
        <div>
           <div className='divider text-3xl'>Browse Our Products</div>
           <div className='grid md:grid-cols-3'>
            {
                products.map(product=> <Product key={product.id} product={product}></Product> )
            }
           </div>
        </div>
    );
};

export default Products;