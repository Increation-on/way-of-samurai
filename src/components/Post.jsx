import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000003/1553495643000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="" />
      {props.message}
      <div><span>like: {props.likecount}</span></div>
    </div>);
}

export default Post;