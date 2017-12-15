import { combineReducers } from 'redux'
import users from './users'
import orders  from './orders'
import products from './products'
import admin from './admin'


export default combineReducers({ users , orders , products , admin })