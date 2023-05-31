import React from "react";

import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="left-side">
                <h1>
                    HEADPHONES
                </h1>
            </div>
            <div className="right-side">
                <div className="favorite">
                    <img src="/icons/favorite.svg" />
                </div>
                <div className="basket">
                    <img src="/icons/basket.svg" />
                </div>
            </div>
        </div>
    )
}

export default Header;