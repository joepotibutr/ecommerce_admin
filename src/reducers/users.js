import { DELETE_USER_SUCCESS ,FETCH_USERS } from '../constants/ActionTypes'
import { combineReducers } from 'redux'



const fetchUsers = (state = [],action) => {
    switch(action.type) {
        case FETCH_USERS : 
            return [...action.users]
        default : 
            return state
    }
}


export const user = (state = {}, action) => {
    switch (action.type) {
        case DELETE_USER_SUCCESS :
            return {}
        default:
            return state
    }
}
export const getVisibleUsers = state => state.fetchUsers

export default combineReducers({ user , fetchUsers })