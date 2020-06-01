import React from 'react';
import classes from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios'
import profileReducer, { getUsersProfile } from '../../Redux/ProfileReducer'
import { withRouter } from 'react-router-dom';
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
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, { getUsersProfile })(withUrlDataContainerComponent);