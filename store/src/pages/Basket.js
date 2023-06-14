import React from "react";
import { useSelector } from "react-redux";

import CardProductBasket from "../components/card-product-basket/CardProductBasket";

const Basket = () => {
    const cartItems = useSelector(state => state.cart.cart)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    return (
        <div className="main">
            <div className="section-name">
                <h2>
                    Корзина
                </h2>
                
            </div>
            <div className="cards-price">
                <li className="cards-basket">
                    {cartItems.map((itemBasket) => (
                        <CardProductBasket key={itemBasket.id} itemBasket={itemBasket} />
                    ))}
                </li>
                <div className="total-price">
                    <div>ИТОГО</div>
                    <span>{totalPrice}</span>
                </div>
            </div>
            
        </div>   
    )
}

export default Basket;