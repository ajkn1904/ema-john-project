import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({products, deleteItemHandler}) => {
    
    const {name, img, price, quantity, seller, shipping, id} = products;


    return (
        <div className='ordered-item'>
            
            <img src={img} alt="" />
            
            <div className='ordered-item-info'>
                
                <div>
                    <h4>{name}</h4>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                    <small>Shipping: ${shipping}</small>
                    <br/>
                    <small>Manufacturer: {seller}</small>
                </div>
                <div>
                    <button onClick={() => deleteItemHandler(id)} className='delete-btn'>
                        <FontAwesomeIcon icon={faTrashCan} className='trash-icon'></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItems;