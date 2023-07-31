import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='py-10'>
            <div className='text-center'>
                <p className='text-red-600 font-bold'>Popular Products</p>
                <h1 className='text-4xl font-bold my-3'>Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
            </div> 

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}                    
                    ></ProductCard>)
                }
            </div>
            <div className='card-actions justify-center pt-8'>
                <button className="btn btn-outline btn-warning">More Products</button>
            </div>
        </div>
    );
};

export default Products;