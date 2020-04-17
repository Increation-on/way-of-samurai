import React from 'react';
import cl from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://ak4.picdn.net/shutterstock/videos/1030479974/thumb/6.jpg' />
            </div>
            <div className={cl.descr_block}>
                ava + description
    </div>
        </div>
    )
}

export default ProfileInfo;