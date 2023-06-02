import React from "react";

import CardProduct from "../components/card-product/CardProduct";

const Basket = () => {
    return (
        <div className="elements">
            <div>
                <h2>
                    Корзина
                </h2>
            </div>
            <CardProduct />
        </div>   
    )
}

export default Basket;