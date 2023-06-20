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
                <img className="img-product" src={img} />
            </div>
            <div className="title">
                {title}
            </div>
            <div>
                <div className="price">
                    {price} ₽
                </div>
                <div className="sale">
                    {sale}
                </div>
            </div>
            <div className="rate">
                <div>
                    <img className="star" src="/icons/star.png"/> 
                </div>
               <span>
                    {rate}   
               </span>
               
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