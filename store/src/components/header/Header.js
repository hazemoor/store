import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="left-side">
                <h1>
                    <Link to="/">HEADPHONES</Link>
                </h1>
            </div>
            <div className="right-side">
                <div className="favorite">
                    <img src="/icons/favorite.svg" />
                </div>
                <div className="basket">
                    <Link to="/basket"><img src="/icons/basket.svg" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;