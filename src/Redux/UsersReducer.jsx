const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
        users: [
           /*  {id:1, fullName:"Jaina", status:"mage", location: {city: "Dalaran", country: "Northrend"}, followed: true, photoURL:'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/012/793/074/944/original/450px_.jpg'},
            {id:2, fullName:"Arthas", status:"paladin", location: {city: "Dalaran", country: "Northrend"}, followed: false, photoURL:'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/012/793/074/944/original/450px_.jpg'},
            {id:3, fullName:"Thrall", status:"shaman", location: {city: "Dalaran", country: "Northrend"}, followed: true, photoURL:'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/012/793/074/944/original/450px_.jpg'},
            {id:4, fullName:"Deathwing", status:"dragon", location: {city: "Dalaran", country: "Northrend"}, followed: false, photoURL:'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/012/793/074/944/original/450px_.jpg'} */
        ]
}

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map((u)=>{
                if(u.id === action.userId){
                    return {...u, followed: true}
                }
                return u;
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map((u)=>{
                if(u.id === action.userId){
                    return {...u, followed: false}
                }
                return u;
            })
        }
    } else if (action.type === SET_USERS){
        return {
            ...state,
            users: [...state.users, ...action.users]
        }
    }

    return state;
}


export const followAC = (userId)=>{
    return {type: FOLLOW, userId}
  }
  
export const unfollowAC = (userId)=>{
    return {type: UNFOLLOW, userId}
  }

export const setUsersAC = (users)=>{
    return {type: SET_USERS, users}
  }

export default usersReducer;