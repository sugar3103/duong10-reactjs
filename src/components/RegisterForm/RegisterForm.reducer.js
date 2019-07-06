import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "./RegisterForm.action";
const initialState = {
    result: null,
    load: false,
    fail: null
}

export default function RegisterReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {...state,
                load: true
            }
        case REGISTER_SUCCESS:
            return {...state,
                load: false,
                result: action.payload
            }
        case REGISTER_FAILURE:
            return {...state,
                load: false,
                fail: action.error
            }
        default:
            return state
    }
}