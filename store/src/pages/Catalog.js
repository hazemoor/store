import React from "react";

import CardProduct from "../components/card-product/CardProduct";

const Catalog = () => {
    return (
        <div className="elements">
            <h2>Наушники</h2>
            <CardProduct />
            <h2>Беспроводные наушники</h2>
            <CardProduct />
        </div>      
    )
}

export default Catalog;