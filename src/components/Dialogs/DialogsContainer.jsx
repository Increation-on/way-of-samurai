import React from 'react';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../Redux/store'
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
        updateNewMessageText: (text)=>{
            dispatch(updateNewMessageTextActionCreator(text))
        } ,
        sendMessage: (text)=>{
            dispatch(sendMessageActionCreator() );
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;