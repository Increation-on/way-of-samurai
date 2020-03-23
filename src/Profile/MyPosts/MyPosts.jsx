import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
  let postData = [
    {message: "message1", id: 1, likesCount: 15},
    {message: "message2", id: 2, likesCount: 20},
    {message: "message3", id: 3, likesCount: 26}
 ]

  return (
    <div className={cl.posts_wrapper}>
      <h3>My posts</h3>
      <div className={cl.posts}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={cl.posts_item}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post message={postData[2].message} likesCount={postData[2].likesCount} />
      </div>
    </div>);
}

export default MyPosts;