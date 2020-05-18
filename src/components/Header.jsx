import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={styles.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDpeJa5vZNBCPWFlImKfQi68liOdYmqHVFGnOIQ3NB8qM79y89&usqp=CAU' />
        <div className={styles.loginBlock}>
            {props.isAuth?props.login:
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;