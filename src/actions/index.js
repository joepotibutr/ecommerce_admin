import * as types from '../constants/ActionTypes'
import users from '../api/users'


const _addUser = user => ({
    type:types.ADD_USER,
    user
})

const _removeUser = index => ({
    type:types.REMOVE_USER,
    index
})

const _fetchUsers = users => ({
    type : types.FETCH_USERS , 
    users
})

export const addUserAction = user => dispatch => {
    dispatch(_addUser(user))
}

export const removeUserAction = index => dispatch => {
    dispatch(_removeUser(index))
}

export const fetchUsersAction = () => dispatch => {
    dispatch(_fetchUsers(users))
}