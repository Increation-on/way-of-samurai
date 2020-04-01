import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post';
import { onPostChange } from '../../Redux/State';

const MyPosts = (props) => {

  let postsElement = props.postData.map((el) => {
    return <Post message={el.message} likesCount={el.likesCount} />
  })

  let newPostElement = React.createRef();


  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }


  return (
    <div className={cl.posts_wrapper}>
      <h3>My posts</h3>
      <div className={cl.posts}>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={cl.posts_item}>
        {postsElement}
      </div>
    </div>);
}

export default MyPosts;