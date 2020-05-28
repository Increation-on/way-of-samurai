import React from 'react';
import userPhoto from '../../Assets/images/user.jpg';
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'



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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "4a51c3f7-0936-4481-8445-5ecf8bc64278"
                                        }
                                    })
                                        .then((response) => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        });
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "4a51c3f7-0936-4481-8445-5ecf8bc64278"
                                        }
                                    })
                                        .then((response) => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }}>follow</button>}
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