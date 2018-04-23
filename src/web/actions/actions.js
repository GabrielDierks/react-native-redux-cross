/**
 * Created by gdierks on 18.04.18.
 */
import {

    AUTH_SUCCESS,
    AUTH_FAIL

} from './constants';


export function authSuccess() {
    return {
        type: AUTH_SUCCESS,
    };
}



export function authFail()  {
    return {
        type: AUTH_FAIL,
    };
}