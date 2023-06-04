import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="main">
            <div>
                <h2>
                    WELCOME!
                    <p>Для выбора наушников, перейдите в <Link className="link" to="/catalog">КАТАЛОГ</Link></p>
                </h2>        
            </div>
        </div>
    )
}

export default Main;