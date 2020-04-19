const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
        postData: [
            { message: "message1", id: 1, likesCount: 15 },
            { message: "message2", id: 2, likesCount: 20 },
            { message: "message3", id: 3, likesCount: 26 }
        ],
        newPostText: ""
    
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.postData.push(newPost);
        state.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newPostText;
    }
    return state;
}

export default profileReducer