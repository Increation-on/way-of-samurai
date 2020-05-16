import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/ProfileReducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;