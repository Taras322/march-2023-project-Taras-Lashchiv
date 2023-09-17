import React from 'react';

import {Link} from "react-router-dom";
import {Route} from "../../routes/Routes"
import ThemeSwitcher from "../switcher/ThemeSwitcher";
const Header = () => {
    return (
        <div className={'header'}>
            <h2><Link to={Route.Home}>Movie APP</Link></h2>
            <div><Link to={Route.User}><img src={require('../User/Avatar.jpeg')} className={'user-image'}/></Link></div>
            <div><Link to={Route.Genres}>genres</Link></div>
            <div><ThemeSwitcher/></div>
            <div><Link to={Route.Movies}>MOVIES LIST</Link></div>
        </div>
    );
};

export default Header;