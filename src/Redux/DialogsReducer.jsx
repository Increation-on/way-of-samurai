const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessageText;
    } else if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 1,
            message: state.newMessageText,
        };
        state.messagesData.push(newMessage);
        state.newMessageText = "";
    }
    return state;
}

export default dialogsReducer;