export const PRODUCT_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST';
export const PRODUCT_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS ';
export const PRODUCT_DETAIL_FAILURE = 'PRODUCT_DETAIL_FAILURE';

//Action creator
function getProductDetailRequest() {
    return {
        type: PRODUCT_DETAIL_REQUEST,
        //payload
    }
}

function getProductDetailSuccess(result) {
    return {
        type: PRODUCT_DETAIL_SUCCESS,
        payload: result
    }
}

function getProductDetailFailure(error) {
    return {
        type: PRODUCT_DETAIL_FAILURE,
        error
    }
}
store.dispath(getProductDetailSuccess)