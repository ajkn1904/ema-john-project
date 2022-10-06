import React from 'react';
import Card from '../Card/Card';
import './Products.css'

const Products = (props) => {
    const addToCart = props.addToCart;
    const products = props.products;
    return (
        <div className='product-cards'>
            {
                products.map(product=> 
                <Card 
                product = {product} 
                key = {product.id}
                addToCart = {addToCart}
                ></Card>
                )
            }
        </div>
    );
};

export default Products;