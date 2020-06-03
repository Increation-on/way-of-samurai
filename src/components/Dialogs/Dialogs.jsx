import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((el) => {
        return <DialogItem name={el.name} id={el.id} />
    });
    let messagesElements = props.messagesData.map((el) => {
        return <Message text={el.message} id={el.id}/>
    });


    let onSendMessage = ()=>{
       props.sendMessage();
    }

    let updateNewMessageText = (e)=>{
        let text = e.currentTarget.value;
        props.updateNewMessageText(text)
    }


    /* if(!props.isAuth) {
        return <Redirect to={"/login"}/>
    } */

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={cl.messages_items}>
                <textarea 
                    value = {props.newMessageText} 
                    placeholder="Enter your message"
                    onChange={updateNewMessageText}/>
                <button 
                    onClick={onSendMessage}>send</button>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;