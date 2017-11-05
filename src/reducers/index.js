import { combineReducers } from 'redux'
import users from './users'
import orders  from './orders'
import products from './products'


export default combineReducers({ users , orders , products })