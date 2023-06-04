import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="main">
            Страница не найдена. Вернуться на <Link className="link" to="/">ГЛАВНУЮ</Link>
        </div>

    )
}

export default NotFound;
