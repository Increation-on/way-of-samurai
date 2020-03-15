import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
  return (
    <div className={cl.posts_wrapper}>
      <h3>My posts</h3>
      <div className={cl.posts}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={cl.posts_item}>
        <Post message="message 1" likecount="15" />
        <Post message="message 2" likecount="20" />
        <Post message="message 3" likecount="25" />
      </div>
    </div>);
}

export default MyPosts;