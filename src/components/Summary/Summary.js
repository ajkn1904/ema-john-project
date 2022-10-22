import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Summary.css'

const Summary = ({cart, clearCart, children}) => {
    const items = cart;
    
    let totalPrice = 0;
    let shippingPrice = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    
    for (const item of items) 
        {
            quantity = quantity + item.quantity;
            totalPrice = totalPrice + item.price * item.quantity;
            shippingPrice = shippingPrice + item.shipping * item.quantity;
        }

    
    tax = parseFloat((totalPrice * 0.1).toFixed(2));
    grandTotal = (totalPrice + shippingPrice + tax).toFixed(2);



    return (
        <div className='summary'>
            
            <h2>Order Summery</h2>

            <small>Selected Items: {quantity} </small>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingPrice}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>

            <button onClick={clearCart} className='clear-cart-btn'>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashCan} className='clear-cart-trash-icon'></FontAwesomeIcon>
            </button>
            {children}
            
        </div>
    );
};

export default Summary;