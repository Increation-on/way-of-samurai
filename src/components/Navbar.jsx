import React from 'react';
import classses from './Navbar.module.css'

const Navbar = () => {
    return <nav className={classses.nav}>
        <div className={classses.item}>
            <a>Profile</a>
        </div>
        <div className={classses.item}>
            <a>Messages</a>
        </div>
        <div className={classses.item}>
            <a>News</a>
        </div>
        <div className={classses.item}>
            <a>Music</a>
        </div>
        <div className={classses.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;