import { useEffect, useState } from 'react';
import Products from '../Products/Products';

import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);
        useEffect( () =>{
            fetch('products.json')
            .then(res=> res.json())
            .then(data =>setProducts(data))
        }, []);

    return (
        <div className='container'>

            <div className="card-container">
                <Products products={products}></Products>
            </div>


            <div className="summary-container">
                <h3>Order Summery</h3>
            </div>
        </div>
    );
};

export default Shop;