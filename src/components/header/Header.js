import React from 'react';
import css from './Header.module.css'
import {Link} from "react-router-dom";
import {Route} from "../../routes/Routes"
const Header = () => {
    return (
        <div className={css.Header}>
            <h2><Link to={Route.Home}>Movie APP</Link></h2>
            <div><Link to={Route.User}>user</Link></div>
            <div><Link to={Route.Genres}>genres</Link></div>
            <div>switcher</div>
            <div><Link to={Route.Movies}>MOVIES LIST</Link></div>
        </div>
    );
};

export default Header;