// import React, { createContext, useContext, useState } from 'react';
// import { faker } from '@faker-js/faker';

// const Cart = createContext();
// faker.seed(100);

// const Context = ({childern}) => {
//     const [cart, setCart] = useState([]);

//     const productArray = [...Array(3)].map((p)=>({
//         id: faker.datatype.uuid(),
//         name: faker.commerce.productName(), 
//         price: faker.commerce.price(),
//         image: faker.image.avatar(),
//     }));
      
//     const [products] = useState(productArray);

//     return (
//         <Cart.Provider value={{cart, setCart, products}}>
//             {childern}
//         </Cart.Provider>
//     )
// };

// export const CartState = () => {
//     return useContext(Cart);
// };
  
// export default Context;

import { createContext, useContext, useState } from "react";
import { faker } from '@faker-js/faker';

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
    const [cart, setCart] = useState([]);

    const productsArray = [...Array(10)].map((p)=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(), 
        price: faker.commerce.price(),
        image: faker.image.avatar(),
    }));

    const [products] = useState(productsArray);

  return (

    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;