import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../Redux/store'

const Dialogs = (props) => {
    debugger;
    let dialogsElements = props.state.dialogsPage.dialogsData.map((el) => {
        return <DialogItem name={el.name} id={el.id} />
    });
    let messagesElements = props.state.dialogsPage.messagesData.map((el) => {
        return <Message text={el.message} id={el.id}/>
    });


    let sendMessage = ()=>{
       props.dispatch(sendMessageActionCreator());
    }

    let onMessageAreaChange = (e)=>{
        let text = e.currentTarget.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={cl.messages_items}>
                <textarea 
                    value = {props.state.dialogsPage.newMessageText} 
                    placeholder="Enter your message"
                    onChange={onMessageAreaChange}/>
                <button 
                    
                    onClick={sendMessage}>send</button>
                {messagesElements}
            </div>
        </div>


    )
}

export default Dialogs;