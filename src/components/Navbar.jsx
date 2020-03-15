import React from 'react';
import classses from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={classses.nav}>
        <div className={classses.item}>
            <NavLink to="/profile" activeClassName={classses.activeLink}>Profile</NavLink>
        </div>
        <div className={classses.item}>
            <NavLink to="/dialogs" activeClassName={classses.activeLink}>Messages</NavLink>
        </div>
        <div className={classses.item}>
            <NavLink to="/news" activeClassName={classses.activeLink}>News</NavLink>
        </div>
        <div className={classses.item}>
            <NavLink to="/music" activeClassName={classses.activeLink}>Music</NavLink>
        </div>
        <div className={classses.item}>
            <NavLink to="/settings" activeClassName={classses.activeLink}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;