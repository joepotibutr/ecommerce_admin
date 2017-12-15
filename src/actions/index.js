import * as types from '../constants/ActionTypes'
import axios from 'axios'

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

const adminLoggedIn = admin => ({
    type : types.ADMIN_LOGGED_IN,
    admin
})

const adminLoggedOut = () => ({
    type : types.ADMIN_LOGGED_OUT
})

export const login = credentials => dispatch => axios.post('/admin',credentials)
    .then(user => {
        localStorage.admin = user.email
        dispatch(adminLoggedIn(user))
    })
    

export const logout = () => dispatch => {
    localStorage.removeItem('admin')
    dispatch(adminLoggedOut())
}


export const setVisibleUsers = () => dispatch => {
    axios.get('/api/users').then((res) => { 
        dispatch(fetchUsers(res.data))
    })
}

export const setVisibleOrders = () => dispatch => {
    axios.get('/api/orders').then((res) => { 
        dispatch(fetchOrders(res.data))
    })
}

export const setVisibleProducts = () => dispatch => {
    axios.get('/api/products').then((res) => {
        dispatch(fetchProducts(res.data))
        })
}

export const createProduct = data => dispatch => axios.post('/api/products',data)
    .then(() => dispatch({ type : types.CREATE_PRODUCT_SUCCESS }))

export const editProduct = data => dispatch => axios.put('/api/products/edit',data)
    .then(() => dispatch({ type : types.EDIT_PRODUCT_SUCCESS }))
    
export const deleteProduct = id => dispatch => axios.delete('/api/products/del',{data : id})
    .then(() => dispatch({ type : types.DELETE_PRODUCT_SUCCESS }))

    export const deleteUser = username => dispatch => axios.delete('/api/users/del',{data : username})
    .then(() => dispatch({ type : types.DELETE_USER_SUCCESS }))