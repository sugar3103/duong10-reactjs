export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE';

//Action creator
function getProductsRequest() {
    return {
        type: PRODUCTS_REQUEST,
        //payload
    }
}

function getProductsSuccess(result) {
    return {
        type: PRODUCTS_SUCCESS,
        payload: result
    }
}

function getProductsFailure(error) {
    return {
        type: PRODUCTS_FAILURE,
        error
    }
}
// store.dispath(getProductsSuccess)