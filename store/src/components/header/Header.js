import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.scss"

const Header = () => {
    const count = useSelector(state => state.cart.count)
    return (
        <div className="header">
            <div className="left-side">
                <h1>
                    <Link className="link" to="/">HEADPHONES</Link>
                </h1>
            </div>
            <div className="right-side">
                <div className="favorite">
                    <img src="/icons/favorite.svg" />
                </div>
                <div className="basket">
                    <Link className="link" to="/basket"><img src="/icons/basket.svg" /></Link>
                    <span>{ count }</span>
                </div>
            </div>
        </div>
    )
}

export default Header;