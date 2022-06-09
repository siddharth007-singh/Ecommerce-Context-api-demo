import React,{useState} from 'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import "./styles.css";

const HomePage = () => {
    const productArray = [...Array(3)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(), 
        price: faker.commerce.price(),
        image: faker.image.avatar(),
    }));

    // console.log(productArray);
    const [product] = useState(productArray);


    return (
        <>
        <div className="productContainer">
            {product.map((prod=>(
                <SingleProduct prod={prod} key={prod.id}/>
            )))}
        </div>
        </>
    )
}

export default HomePage
