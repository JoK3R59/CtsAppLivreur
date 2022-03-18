import {
    ADD_NEW_USER_EMAIL_PASSWORD,
    ADD_NEW_DATA_USER,
    USER_CONNECTED
} from './actionsTypesUsers';

export const addUser = (data) => ({
    type: ADD_NEW_USER_EMAIL_PASSWORD,
    payload: {
        data
    }
});

export const addDataUser = (data) => ({
    type: ADD_NEW_DATA_USER,
    payload: {
        data
    }
});

export const userConnected = (data) => ({
    type: USER_CONNECTED,
    payload: {
        data
    }
});