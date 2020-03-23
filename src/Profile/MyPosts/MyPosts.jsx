import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {

  let postData = [
    { message: "message1", id: 1, likesCount: 15 },
    { message: "message2", id: 2, likesCount: 20 },
    { message: "message3", id: 3, likesCount: 26 }
  ];

  let postsElement = postData.map((el) => {
    return <Post message={el.message} likesCount={el.likesCount} />
  })

  return (
    <div className={cl.posts_wrapper}>
      <h3>My posts</h3>
      <div className={cl.posts}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={cl.posts_item}>
        {postsElement}
      </div>
    </div>);
}

export default MyPosts;