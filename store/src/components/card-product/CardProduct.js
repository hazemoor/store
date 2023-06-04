import React from "react"

import "./CardProduct.scss"

const CardProduct = ({ item }) => {
    const {id, img, title, price, sale, rate} = item;
    return (
        <div className="card">
            <div className="img">
                <img src={img} />
            </div>
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="price">
                <h2>{price}</h2>
            </div>
            <div className="sale">
                <h2>{sale}</h2>
            </div>
            <div className="rate">
                <h2>{rate}</h2>
            </div>
            <button className="addToBasket">Купить</button>
        </div>
    )
}

export default CardProduct;