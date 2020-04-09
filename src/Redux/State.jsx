
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
        }
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
        if(action.type === "ADD-POST"){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if(action.type === "UPDATE-NEW-POST-TEXT"){
           /*  let newPostText = this._state.profilePage.newPostText; */
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }
}    

export default store;

