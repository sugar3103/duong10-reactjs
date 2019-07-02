import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./LoginForm.action";
const initialState = {
    result: null,
    load: false,
    fail: null
}

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                load: true
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                result: action.payload
            })
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                load: false,
                fail: action.error
            })
        default:
            return state
    }
}