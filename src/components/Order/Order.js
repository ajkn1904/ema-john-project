import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteCartFromDB, removeFromDB } from '../../utilities/fakedb';
import ReviewItems from '../ReviewItems/ReviewItems';
import Summary from '../Summary/Summary';
import './Order.css'

const Order = () => {
    const {previousCart} = useLoaderData();
    
    const [cart, setCart] = useState(previousCart);

    const clearCart = () => {
        setCart([]);
        deleteCartFromDB();
    }


    const deleteItemHandler = (id) =>{
        const remainingItem = cart.filter(item => item.id !== id);

        setCart(remainingItem);

        removeFromDB(id);

    }


    return (
        <div className='container'>

            <div className="order-container">
                {
                    cart.map(product => 
                        <ReviewItems products={product}
                        key={product.id}
                        deleteItemHandler ={deleteItemHandler}
                        ></ReviewItems>
                )}
            </div>


            <div className="summary-container">
                <Summary cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'><button className='review-btn'>Proceed Shipping</button></Link>
                </Summary>

            </div>
        </div>
    );
};

export default Order;