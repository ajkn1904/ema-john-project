import React from 'react';
import './Card.css'

const Card = (props) => {
    const {img, name, price, seller} = props.product;
        return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <small>{seller}</small>
            </div>

            <button>Add top Cart</button>
        </div>
    );
};

export default Card;