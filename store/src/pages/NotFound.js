import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="elements">
            Страница не найдена. Вернуться на <Link to="/">ГЛАВНУЮ</Link>
        </div>

    )
}

export default NotFound;
