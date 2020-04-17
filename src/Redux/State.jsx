import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";



let store = {
    _state: {
        profilePage: {
            postData: [
                { message: "message1", id: 1, likesCount: 15 },
                { message: "message2", id: 2, likesCount: 20 },
                { message: "message3", id: 3, likesCount: 26 }
            ],
            newPostText: ""
        },
        dialogsPage: {
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
            ]
        },
        newMessageText: ""
    },
    _callSubscriber() {
        console.log("changed store")
    },
    getState() {
        return  this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}


export const addPostActionCreator = ()=>{
    return {type: ADD_POST}
  }
  
export const updateNewPostActionCreator = (text)=>{
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text}
  }
export const sendMessageActionCreator = ()=>{
    return {type:SEND_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text)=>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text}
}

export default store;

