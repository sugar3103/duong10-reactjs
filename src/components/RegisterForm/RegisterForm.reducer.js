import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./RegisterForm.action";
const initialState = {
    result: null,
    load: false,
    fail: null
}

export default function RegisterReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                load: true
            })
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                result: action.payload
            })
        case REGISTER_FAILURE:
            return Object.assign({}, state, {
                load: false,
                fail: action.error
            })
        default:
            return state
    }
}