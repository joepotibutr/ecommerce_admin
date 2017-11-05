import * as types from '../constants/ActionTypes'
import users from '../api/users'
import orders from '../api/orders'
import products from '../api/products'


const _addUser = user => ({
    type:types.ADD_USER,
    user
})

const _removeUser = index => ({
    type:types.REMOVE_USER,
    index
})

const fetchUsers = users => ({
    type : types.FETCH_USERS , 
    users
})

const fetchOrders = orders => ({
    type : types.FETCH_ORDERS , 
    orders
})

const fetchProducts = products => ({
    type : types.FETCH_PRODUCTS , 
    products
})

export const addUserAction = user => dispatch => {
    dispatch(_addUser(user))
}

export const removeUserAction = index => dispatch => {
    dispatch(_removeUser(index))
}

export const setVisibleUsers = () => dispatch => {
    dispatch(fetchUsers(users))
}

export const setVisibleOrders = () => dispatch => {
    dispatch(fetchOrders(orders))
}

export const setVisibleProducts = () => dispatch => {
    dispatch(fetchProducts(products))
}