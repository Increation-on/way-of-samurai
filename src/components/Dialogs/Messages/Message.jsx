import React from 'react';
import cl from './Message.module.css';


const Message = (props) => {
    return (
        <div className={cl.message}>{props.text}</div>
    )
}

export default Message;