import { ADD_USER , REMOVE_USER , FETCH_USERS } from '../constants/ActionTypes'
import { combineReducers } from 'redux'


const initialState = {
    users : {}
}

const fetchUsers = (state = [],action) => {
    switch(action.type) {
        case FETCH_USERS : 
            return [...action.users]
        default : 
            return state
    }
}

const userHandler = (state = initialState.users,action) => {
    switch(action.type) {
        case ADD_USER :
            return state
        case REMOVE_USER :
            return {
                users : [
                    ...state.users.slice(0,action.index),
                    ...state.users.slice(action.index + 1)
                ]
            }
        default : return state
    }
}

export const getVisibleUsers = state => state.fetchUsers

export default combineReducers({ userHandler , fetchUsers })