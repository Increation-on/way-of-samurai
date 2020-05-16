import React from 'react';
import cl from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://ak4.picdn.net/shutterstock/videos/1030479974/thumb/6.jpg' />
            </div>
            <div className={cl.descr_block}>
                <img src={props.profile.photos.large} alt="avatar"/>
                <div>About me: {props.profile.aboutMe}</div>
                <div>contacts: {props.profile.contacts.facebook}</div>
                ava + description
    </div>
        </div>
    )
}

export default ProfileInfo;