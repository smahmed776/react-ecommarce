import React, {useState, useEffect, createContext} from 'react'


export const CartItemContext = createContext();



export const CartItemProvider = props => {
    const [cartItem, setCartItem] = useState([]);
    useEffect(()=>{
        cart();
    }, []);
    const cart = () => {
        setCartItem([]);

    }

    return (
        <CartItemContext.Provider value={[cartItem, setCartItem]}>
            {props.children}
        </CartItemContext.Provider>
    )
};