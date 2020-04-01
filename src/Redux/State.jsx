let rerenderEntireTree =()=>{
}

let state = {
    profilePage:{
        postData: [
            { message: "message1", id: 1, likesCount: 15 },
            { message: "message2", id: 2, likesCount: 20 },
            { message: "message3", id: 3, likesCount: 26 }
        ],
        newPostText: ""
    },
    dialogsPage:{
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
}

window.state = state;

export const addPost = ()=>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText ="";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText)=>{
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
} 

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
}


export default state;

