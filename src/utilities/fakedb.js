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

export {
    addToCartDB,
    getStoredCart
};