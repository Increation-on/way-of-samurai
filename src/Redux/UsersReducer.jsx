const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETHING = "TOGGLE_IS_FETHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map((u) => {
                if (u.id === action.userId) {
                    return { ...u, followed: true }
                }
                return u;
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map((u) => {
                if (u.id === action.userId) {
                    return { ...u, followed: false }
                }
                return u;
            })
        }
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            users: action.users
        }
    } else if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.currentPage
        }
    } else if (action.type === SET_TOTAL_USERS_COUNT) {
        return {
            ...state,
            totalUsersCount: action.totalUsersCount
        }
    } else if (action.type === TOGGLE_IS_FETHING) {
        return {
            ...state,
            isFething: action.isFetching
        } 
    } else if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS){
        return {
            ...state,
            followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id=>id !== action.userId)
        }
    }    
    return state;
}


export const follow= (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount }
}

export const toggleIsFetching = (isFetching) =>{
    return {type: TOGGLE_IS_FETHING, isFetching: isFetching}
}

export const toggleFollowingProgress = (isFetching, userId) =>{
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: isFetching, userId: userId}
}

export default usersReducer;