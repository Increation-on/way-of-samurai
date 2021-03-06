const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
        dialogsData: [
            { name: "Rexxar", id: 1 },
            { name: "Thrall", id: 2 },
            { name: "Jaina", id: 3 },
            { name: "Rexxar", id: 4 },
            { name: "Uther", id: 5 }
        ],

        messagesData: [
            { message: "hey", id: 1 },
            { message: "yoyoyo", id: 2 },
            { message: "hello", id: 3 }
        ],
        newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        return {
            ...state,
            newMessageText: action.newMessageText
        }
    } else if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 1,
            message: state.newMessageText,
        };
        return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
            newMessageText: ""
        }
    }
    return state;
}


export const sendMessageActionCreator = ()=>{
    return {type:SEND_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text)=>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text}
}

export default dialogsReducer;