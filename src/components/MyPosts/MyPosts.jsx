import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
    return (
    <div>
      My posts
      <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="message 1" likecount="15"/>
        <Post message="message 2" likecount="20"/>
        <Post message="message 3" likecount="25"/>
      </div>
    </div>);
}

export default MyPosts;