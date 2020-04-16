import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts postData={props.postData} dispatch={props.dispatch}  state={props.state}/>
    </div>
  )
}

export default Profile;