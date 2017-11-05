import { FETCH_PRODUCTS } from '../constants/ActionTypes'
import { combineReducers } from 'redux'


const fetchProducts = (state = [],action) => {
    switch(action.type) {
        case FETCH_PRODUCTS :
            return [
                ...action.products
            ]
        default : return state
    }
}

export const getVisibleProducts = state => state.fetchProducts

export default combineReducers({ fetchProducts })