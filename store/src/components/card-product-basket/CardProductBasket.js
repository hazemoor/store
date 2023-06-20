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
            <div className="img">
                <img className="img-product-basket" src={img} />    
            </div>
            <div>
                <div>{title}</div>
                <div>{price} ₽</div>
            </div>
            <button className="img-button" onClick={del}>
                <img className="img-button" src="/icons/rem.svg"/>
            </button>
            <div className="count">
                <button className="dec" onClick={dec}>-</button>
                <span className="count-span">{count}</span>
                <button className="inc" onClick={inc}>+</button>
            </div>
            <div></div>
            <div>{price} ₽</div>
        </div>
    );
};

export default CardProductBasket;