import { FETCH_ORDERS } from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const fetchOrders = (state = [],action) => {
    switch(action.type){
        case FETCH_ORDERS :
            return 
        default : return state
    }
}

export default combineReducers({ fetchOrders })