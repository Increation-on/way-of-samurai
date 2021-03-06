import {usersAPI} from '../Api/Api'

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
        postData: [
            { message: "message1", id: 1, likesCount: 15 },
            { message: "message2", id: 2, likesCount: 20 },
            { message: "message3", id: 3, likesCount: 26 }
        ],
        newPostText: "",
        profile: null
    
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };     
        return{
            ...state,
            postData: [...state.postData, newPost],
            newPostText: ""
        }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        return{
            ...state,
            newPostText: action.newPostText
        }
    } else if(action.type === SET_USER_PROFILE){
        return{
            ...state,
            profile: action.profile
        }
    }
    return state;
}

export default profileReducer

export const addPostActionCreator = ()=>{
    return {type: ADD_POST}
  }
  
export const updateNewPostActionCreator = (text)=>{
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text}
  }

export const setUsersProfile = (profile)=>{
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const getUsersProfile = (userId)=>{
    return (dispatch)=>{
        usersAPI.getProfile(userId).then((response) => {  
           dispatch(setUsersProfile(response.data));
        })
    }
}  