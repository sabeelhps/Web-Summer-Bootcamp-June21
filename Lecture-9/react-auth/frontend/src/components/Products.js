import React from 'react'
import axios from 'axios';

function Products() {


    async function getProducts() {
        
        const res = await axios.get('/products');
        console.log(res);
    }


    return (
        <div>
            <h1>Get All the Products</h1>
            <button onClick={getProducts}>Get Products</button>
        </div>
    )
}

export default Products;