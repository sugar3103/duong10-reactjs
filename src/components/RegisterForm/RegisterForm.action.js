export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

//Action creator
function getRegisterRequest() {
    return {
        type: REGISTER_REQUEST,
        //payload
    }
}

function getRegisterSuccess(result) {
    return {
        type: REGISTER_SUCCESS,
        payload: result
    }
}

function getRegisterFailure(error) {
    return {
        type: REGISTER_FAILURE,
        error

    }
}
// store.dispath(getRegisterSuccess)