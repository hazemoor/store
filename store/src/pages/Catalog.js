import React from "react";
import { headphones, headphones1 } from "../data/data";
import CardProduct from "../components/card-product/CardProduct";


const Catalog = () => {
    return (
        <div className="main">
            <div className="section-name">
                <h2>Каталог</h2>
            </div>
            <h3>Наушники</h3>
            <div className="cards">
                {headphones.map((item) => (
                    <CardProduct key={item.id} item={item} />
                ))}
            </div>  
            <h3>Беспроводные наушники</h3>
            <div className="cards">
                {headphones1.map((item) => (
                    <CardProduct key={item.id} item={item} />
                ))}
            </div> 
            
        </div>      
    )
}

export default Catalog;