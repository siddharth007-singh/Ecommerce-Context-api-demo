import React, { createContext, useState } from 'react';

export const Cart = createContext();

const Context = ({childern}) => {
    const [cart, setCart] = useState([]);
    return (
        <Cart.Provider value={{cart, setCart}}>
            {childern}
        </Cart.Provider>
    )
}

export default Context;
