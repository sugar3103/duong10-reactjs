import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAILURE } from "./ProductList.action";
const initialState = {
    result: null,
    load: false,
    fail: null
}

export default function ProductDetailReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return Object.assign({}, state, {
                load: true
            })
        case PRODUCT_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                load: false,
                result: action.payload
            })
        case PRODUCT_DETAIL_FAILURE:
            return Object.assign({}, state, {
                load: false,
                fail: action.error
            })
        default:
            return state
    }
}