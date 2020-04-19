import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/store'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props) => {
  /* let state = props.store.getState(); */ 
  return (
    <StoreContext.Consumer>{(store)=>{
      let state = store.getState();
      let addPost = () => {
        store.dispatch(addPostActionCreator());
      }
    
      let onPostChange = (text) => {
        store.dispatch(updateNewPostActionCreator(text));
      }
      return (
        <MyPosts updateNewPostText={onPostChange}
        addPost={addPost}
        postData={state.profilePage.postData}
        newPostText={state.profilePage.newPostText} />
      )
    }}
    </StoreContext.Consumer>

  );
}

export default MyPostsContainer;