import React from "react"

import "./CardProduct.scss"

const CardProduct = (props) => {
    return (
        <div className="card">
            <div className="img">
                {props.img}
            </div>
            <div className="title">
                <h2></h2>
            </div>
            <div className="price">
                <h2></h2>
            </div>
            <div className="sale">
                <h2></h2>
            </div>
            <div className="rate">
                <h2></h2>
            </div>
        </div>
    )
}

export default CardProduct;