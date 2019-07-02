export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Action creator
function getLoginRequest() {
    return {
        type: LOGIN_REQUEST,
        //payload
    }
}

function getLoginSuccess(result) {
    return {
        type: LOGIN_SUCCESS,
        payload: result
    }
}

function getLoginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    }
}
store.dispath(getLoginSuccess)