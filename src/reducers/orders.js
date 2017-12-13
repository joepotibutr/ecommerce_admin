import { FETCH_ORDERS } from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const fetchOrders = (state = [],action) => {
    switch(action.type){
        case FETCH_ORDERS :
            return [...action.orders]
        default : return state
    }
}

export const getVisibleOrders = state => state.fetchOrders 

export default combineReducers({ fetchOrders })