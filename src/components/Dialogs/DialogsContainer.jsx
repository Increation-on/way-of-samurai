import React from 'react';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../Redux/DialogsReducer'
import Dialogs from './Dialogs';    
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state)=>{
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
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

compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)

/* let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent) */

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
