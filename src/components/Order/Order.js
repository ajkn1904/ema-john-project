import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Summary from '../Summary/Summary';

const Order = () => {
    const {products, previousCart} = useLoaderData();
    
    const [cart, setCart] = useState([previousCart]);


    return (
        <div className='container'>

            <div className="card-container">
                
            </div>


            <div className="summary-container">
                <Summary cart={cart}></Summary>

            </div>
        </div>
    );
};

export default Order;