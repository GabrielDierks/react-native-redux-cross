/**
 * Created by gdierks on 02.03.18.
 */
import {

    CHECK_AUTH,
    CHECK_AUTH_SUCCESS,
    LOGOUT,
    LOGIN

} from './constants';

import type { Action } from './types';

export function logoutUser() {
    return {
        type: LOGOUT,
    };
}

export function checkAuth() {
    return {
        type: CHECK_AUTH,
    };

}
export function checkAuthSuccess() {
    return {
        type: CHECK_AUTH_SUCCESS,
    };

}

export function loginScreen() {
    return {
        type: LOGIN,
    };
}