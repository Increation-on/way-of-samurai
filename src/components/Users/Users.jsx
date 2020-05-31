import React from 'react';
import userPhoto from '../../Assets/images/user.jpg';
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../Api/Api';



let Users = (props) => {
    let pagesCount = Math.ceil(/* props.totalUsersCount */ 54 / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((el) => {
                    return <span className={props.currentPage === el && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(el) }}>{el}</span>
                })}

            </div>
            {props.users.map((u) => {
                return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="image" className={styles.ava} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                onClick={() => {{props.follow(u.id)}}}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </div>
            })}
        </div>
    )
}

export default Users;