import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, increment, decrement } from "../../redux/cart/reduser";

import "./CardProductBasket.scss"

const CardProductBasket = ({ itemBasket }) => {
    const {id, img, title, price, sale, rate, count} = itemBasket;

    const dispatch = useDispatch();

    const del = () => {
        dispatch(removeFromCart(id));
    };

    const inc = () => {
        dispatch(increment(id));
    };

    const dec = () => {
        dispatch(decrement(id));
    };

    return (
        
        <div className="card-basket">
            <div>
                <img src={img} />    
            </div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{sale}</div>
            <div>{rate}</div>
            <div>
                <button className="dec" onClick={dec}>-</button>
                <span>{count}</span>
                <button className="inc" onClick={inc}>+</button>
            </div>
            <button onClick={del}><img src="/icons/rem.svg" /></button>
        </div>
    );
};

export default CardProductBasket;