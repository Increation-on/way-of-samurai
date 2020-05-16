import React from 'react';
import classes from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios'
import profileReducer, {setUsersProfile} from '../../Redux/ProfileReducer'

class ProfileContainer extends React.Component{

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {  
        this.props.setUsersProfile(response.data);
    })
}

  render(){
    return (
      <div className={classes.content}>
        <Profile {...this.props} profile = {this.props.profile}/>
      </div>
    )
  }
 
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}


export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);