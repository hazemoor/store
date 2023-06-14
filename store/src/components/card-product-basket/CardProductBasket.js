import React from "react";

const CardProductBasket = ({ itemBasket }) => {
    const {id, img, title, price, sale, rate} = itemBasket
    return (
        
        <div className="card-basket">
            <div>
                <img src={img} />    
            </div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{sale}</div>
            <div>{rate}</div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
            <button>delete</button>

        </div>
    )
}

export default CardProductBasket;