import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { addInCart, removeFromCart } from "../../redux/cart/reduser";

import "./CardProduct.scss"

const CardProduct = ({ item }) => {
    const {id, img, title, price, sale, rate} = item;
    const dispatch = useDispatch();
    const items = useSelector((state)=>state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === id);

    const add = () => {
        if (isItemInCart) {
            dispatch(removeFromCart(id))
        } else {
            dispatch(addInCart(item))
        }     
    };
    
    return (
        <div className="card">
            <div className="img">
                <img src={img} />
            </div>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="price">
                <h4>{price}</h4>
            </div>
            <div className="sale">
                <h4>{sale}</h4>
            </div>
            <div className="rate">
                <h4>{rate}</h4>
            </div>
            <button 
                className="addToBasket"
                type={isItemInCart ? "second" : "first"}
                onClick={add} >{isItemInCart ? "Удалить" : "Купить"}
            </button>
        </div>
    )
}

export default CardProduct;