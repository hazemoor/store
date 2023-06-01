import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="elements">
            Главная страница
            Для выбора наушников, перейдите в <Link to="/catalog">КАТАЛОГ</Link>
        </div>
    )
}

export default Main;