import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from "./ProductList.action";
const initialState = {
    result: null,
    load: false,
    fail: null
}

export default function ProductListReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return Object.assign({}, state, {
                load: true
            })
        case PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                result: action.payload
            })
        case PRODUCTS_FAILURE:
            return Object.assign({}, state, {
                load: false,
                fail: action.error
            })
        default:
            return state
    }
}