import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../Assets/images/user.jpg'

const Users = (props) => {
    if(props.users.length === 0 ){

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response)=>{
            props.setUsers(response.data.items);
        })

       /*  props.setUsers(
            [
                {id:1, fullName:"Jaina", status:"mage", location: {city: "Dalaran", country: "Northrend"}, followed: true, photoURL:'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/012/793/074/944/original/450px_.jpg'},
                {id:2, fullName:"Arthas", status:"paladin", location: {city: "Dalaran", country: "Northrend"}, followed: false, photoURL:'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/012/793/074/944/original/450px_.jpg'},
                {id:3, fullName:"Thrall", status:"shaman", location: {city: "Dalaran", country: "Northrend"}, followed: true, photoURL:'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/012/793/074/944/original/450px_.jpg'},
                {id:4, fullName:"Deathwing", status:"dragon", location: {city: "Dalaran", country: "Northrend"}, followed: false, photoURL:'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/012/793/074/944/original/450px_.jpg'}
            ]
        ) */
    }

    return (
        <div>{props.users.map((u) => {
            return <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photos.small !== null ? u.photos.small : userPhoto } alt="image"  className={styles.ava}/>
                    </div>
                    <div>
                        {u.followed ?
                        <button onClick={()=>{props.unfollow(u.id)}}>unfollow</button>:
                        <button onClick={()=>{props.follow(u.id)}}>follow</button>}
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

export default Users