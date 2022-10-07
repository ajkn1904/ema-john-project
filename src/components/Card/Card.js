import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css'

const Card = (props) => {
    const {img, name, price, seller, ratings} = props.product;
        return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h5>{name}</h5>
                <p id='card-info-p'>Price: ${price}</p>
                <small>Manufacturer: {seller}</small>
                <br></br>
                <small>Rating: {ratings} stars</small>
            </div>

            <button onClick={()=> props.addToCart(props.product)} className='cart-btn'>
                <p>Add top Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Card;