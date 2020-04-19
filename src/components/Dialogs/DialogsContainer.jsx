import React from 'react';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../Redux/store'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = ()=>{
       props.store.dispatch(sendMessageActionCreator());
    }

    let updateNewMessageText = (text)=>{
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs sendMessage={sendMessage} 
                 updateNewMessageText={updateNewMessageText}
                 dialogsData={state.dialogsPage.dialogsData}
                 messagesData={state.dialogsPage.messagesData}
                 newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer;