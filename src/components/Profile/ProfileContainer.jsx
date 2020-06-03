import React from 'react';
import classes from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios'
import profileReducer, { getUsersProfile } from '../../Redux/ProfileReducer'
import { withRouter, Redirect } from 'react-router-dom';
import { usersAPI } from '../../Api/Api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId);
  }

  render() {

    if(!this.props.isAuth){
      return <Redirect to={"/login"}/>
    }

    return (
      <div className={classes.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, { getUsersProfile })(withUrlDataContainerComponent);