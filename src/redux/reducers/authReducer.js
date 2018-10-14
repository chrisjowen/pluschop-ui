import { SET_USER } from '../types/auth';

let initState = {
    userData: localStorage.getObject('userData') || {}
}

const authReducer = ( state = initState, action ) => {

    const { type, payload } = action

    switch ( type ) {

        case SET_USER:
            return { ...state, userData: payload}
        default:
            return state

    }

}

export default authReducer