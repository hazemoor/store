import React from "react";
import { Link } from "react-router-dom"

import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="name">
                <h1>
                    <Link className="link link-footer" to="/">HEADPHONES</Link>
                </h1>
            </div>
            <div></div>
        </div>
    )
}

export default Footer;