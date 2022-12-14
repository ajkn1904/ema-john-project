import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';
import './Shop.css'

import {addToCartDB, deleteCartFromDB, getStoredCart} from '../../utilities/fakedb';

import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';


const Shop = () => {

    const products = useLoaderData();
    const [cart, setCart] = useState([]);



        let newCart = []
        const cartHandler = (product) => {
            

            const existedProduct = cart.find(selectedProduct => selectedProduct.id === product.id);

            if(!existedProduct){
                product.quantity = 1;
                newCart = [...cart, product];
            }
            else{
                const restProduct = cart.filter(selectedProduct => selectedProduct.id !== product.id);
                existedProduct.quantity += 1;
                newCart = [...restProduct, existedProduct];

            }

            setCart(newCart);

               addToCartDB(product.id);
        }


        useEffect(() => {
            const getCart = getStoredCart();
            
            const savedCart = [];

            for (const id in getCart) {
                const addedProduct = products.find(product => product.id === id);
                if(addedProduct){
                    const newQuantity = getCart[id];
                    addedProduct.quantity = newQuantity;
                    savedCart.push(addedProduct);
                    
                    //console.log(addedProduct);
            }
            }

            setCart(savedCart);

        }, [products]);



        const clearCart = () => {
            setCart([]);
            deleteCartFromDB();
        }

    return (
        <div className='container'>

            <div className="card-container">
                <Products products={products} addToCart={cartHandler}></Products>
            </div>


            <div className="summary-container">
                <Summary cart={cart} clearCart={clearCart}>
                    <Link to='/order'><button className='review-btn'> Review Order</button></Link>
                </Summary>
            </div>
        </div>
    );
};

export default Shop;