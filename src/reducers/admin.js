import { ADMIN_LOGGED_IN , ADMIN_LOGGED_OUT } from '../constants/ActionTypes'

export const admin = (state = {} , action) => {
    switch (action.type) {
        case ADMIN_LOGGED_IN : 
            return action.ADMIN
        case ADMIN_LOGGED_OUT :
            return {}
        default:
            return state;
    }
}

export default admin