import { FETCH_PRODUCTS , CREATE_PRODUCT_SUCCESS , DELETE_PRODUCT_SUCCESS , EDIT_PRODUCT_SUCCESS } from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const getProductId = (state = [], action) => {
    switch(action.type){
        case FETCH_PRODUCTS : 
            return action.products.map(product => product.id)
        default : 
            return state
    }
}

const fetchProductsById = (state = {} , action ) => {
    switch(action.type){
        case FETCH_PRODUCTS : 
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                  obj[product.id] = product
                    return obj
                    },{})
              }
        default : return state
    }    
}

const product = (state,action) => {
    switch(action.type){
        case CREATE_PRODUCT_SUCCESS :
            return {}
        case DELETE_PRODUCT_SUCCESS : 
            return {}
        case EDIT_PRODUCT_SUCCESS :
            return {}
        default : return {}
    }
}

export default combineReducers({ 
    fetchProductsById , 
    getProductId ,
    product 
})

export const getProducts = (state,id) => 
state.fetchProductsById[id]

export const getVisibleProducts = state => 
state.getProductId.map(id => getProducts(state,id))

