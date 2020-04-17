import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../Redux/store'


const MyPosts = (props) => {

  let postsElement = props.state.profilePage.postData.map((el) => {
    return <Post message={el.message} likesCount={el.likesCount} />
  })

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (e) => {
    let text = e.currentTarget.value;
    props.dispatch(updateNewPostActionCreator(text));
  }


  return (
    <div className={cl.posts_wrapper}>
      <h3>My posts</h3>
      <div className={cl.posts}>
        <textarea  
          onChange={onPostChange} 
          value={props.state.profilePage.newPostText}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={cl.posts_item}>
        {postsElement}
      </div>
    </div>);
}

export default MyPosts;