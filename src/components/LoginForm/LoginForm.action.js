export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Action creator
export function getLoginRequest() {
    return {
        type: LOGIN_REQUEST,
        //payload
    }
}

export function getLoginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function getLoginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    }
}
export async function login(email, password) {
    return async(dispatch) => {

    }
}
// store.dispath(getLoginSuccess)