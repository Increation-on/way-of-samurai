import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
  
  let postsElement = props.postData.map((el) => {
    return <Post message={el.message} likesCount={el.likesCount} />
  })

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.currentTarget.value;
    props.updateNewPostText(text);
  }


  return (
    <div className={cl.posts_wrapper}>
      <h3>My posts</h3>
      <div className={cl.posts}>
        <textarea  
          onChange={onPostChange} 
          value={props.newPostText}/>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={cl.posts_item}>
        {postsElement}
      </div>
    </div>);
}

export default MyPosts;