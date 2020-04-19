import React from 'react';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../Redux/store'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState();
            let sendMessage = () => {
                store.dispatch(sendMessageActionCreator());
            }

            let updateNewMessageText = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text))
            }
            return(
                <Dialogs sendMessage={sendMessage}
                updateNewMessageText={updateNewMessageText}
                dialogsData={state.dialogsPage.dialogsData}
                messagesData={state.dialogsPage.messagesData}
                newMessageText={state.dialogsPage.newMessageText} />
            )
        }}
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;