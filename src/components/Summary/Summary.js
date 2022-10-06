import React from 'react';
import './Summary.css'

const Summary = (props) => {
    const items = props.cart;
    
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
            
            <h3>Order Summery</h3>

            <small>Selected Items: {quantity} </small>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingPrice}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            
        </div>
    );
};

export default Summary;