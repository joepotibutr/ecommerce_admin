import * as types from '../constants/ActionTypes'
import axios from 'axios'


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
    
export const deleteProduct = id => dispatch => 
  {     console.log(id)
      return axios.delete('/api/products/del',{data : id})
    .then(() => dispatch({ type : types.DELETE_PRODUCT_SUCCESS }))}