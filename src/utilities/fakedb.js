const getStoredCart = () =>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');

    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


const addToCartDB = (id) => {
    
    const shoppingCart = getStoredCart();

    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

};

const removeFromDB = (id) => {
    
    const shoppingCart = getStoredCart();

        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
}

const deleteCartFromDB = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToCartDB,
    getStoredCart,
    removeFromDB,
    deleteCartFromDB
};