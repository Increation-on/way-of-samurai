import React from 'react';
import cl from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://ak4.picdn.net/shutterstock/videos/1030479974/thumb/6.jpg' />
            </div>
            <div className={cl.descr_block}>
                <img src={props.profile.photos.large} alt="avatar" className={cl.ava}/>
                <div>About me: {props.profile.aboutMe}</div>
                <div>contacts: <a href={`https://${props.profile.contacts.facebook}`} target="_blank">facebook</a></div>
                <div>{props.profile.lookingForAJob ?
                    <div>ищу работу</div> :
                    <div>не ищу работу</div>
                }</div>
                ava + description
    </div>
        </div>
    )
}

export default ProfileInfo;