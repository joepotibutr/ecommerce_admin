import * as types from '../constants/ActionTypes'
import axios from 'axios'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()


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

const adminLoggedIn = () => ({
    type : types.ADMIN_LOGGED_IN
})

const adminLoggedOut = () => ({
    type : types.ADMIN_LOGGED_OUT
})

// export const login = () => dispatch => 
//     {
//         dispatch(adminLoggedIn())
//     }
// axios.post('/api/admin',data)
//     .then(admin => {
//         const data = admin.data
//         localStorage.admin = admin.data.username
//       return  dispatch(adminLoggedIn(data))
//     }).then(history.push('/overview'))

    

export const logout = () => dispatch => {
    localStorage.removeItem('admin')
    return dispatch(adminLoggedOut())
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