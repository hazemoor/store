import React from "react";
import { headphones, headphones1 } from "../data/data";
import CardProduct from "../components/card-product/CardProduct";


const Catalog = () => {
    return (
        <div className="elements">
            <h2>Наушники</h2>
            {headphones.map((item) => (
                <CardProduct key={item.id} item={item} />
            ))}
            <h2>Беспроводные наушники</h2>
            
        </div>      
    )
}

export default Catalog;