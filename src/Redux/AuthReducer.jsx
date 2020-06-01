import {authApi} from '../Api/Api'
const SET_USER_DATA = "SET_USER_DATA";
const UNFOLLOW = "UNFOLLOW";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
           ...action.data,
           isAuth: true
        }
    } 
    return state;
}




export const setAuthUserData = (userId, email, login) =>{
    return {type: SET_USER_DATA, data: {userId, email, login}}
}

export const getAuthUserData = () =>{
    return (dispatch)=>{
        authApi.me().then((response) => {
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login));
            }
         })
    }
}
export default authReducer;