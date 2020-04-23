import React from 'react';
import store, { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../Redux/store'
import Dialogs from './Dialogs';    
import { connect } from 'react-redux';


let mapStateToProps = (state)=>{
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        updateNewMessageText: ()=>{
            dispatch(sendMessageActionCreator())
        } ,
        sendMessage: (text)=>{
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;